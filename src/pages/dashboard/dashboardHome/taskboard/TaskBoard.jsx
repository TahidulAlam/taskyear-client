/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import useAuth from "../../../../hooks/useAuth";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useTaskData from "../../../../hooks/usetaskData";
import TaskCard from "../taskcard/TaskCard";

const TaskBoard = () => {
  const { user } = useAuth();
  const { taskData, refetch } = useTaskData();
  const axios = useAxiosPublic();
  const { register, handleSubmit } = useForm();

  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await taskData;
        setTasks(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [taskData]);

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination || source.droppableId === destination.droppableId) {
      return;
    }
    console.log(destination.droppableId);
    const sourceIndex = source.index;
    const destinationIndex = destination.index;
    const destinationStatus = parseInt(
      destination.droppableId.replace("status", " ")
    );

    setTasks((prevTasks) => {
      const tasksCopy = Array.isArray(prevTasks) ? [...prevTasks] : [];
      const [removed] = tasksCopy.splice(sourceIndex, 1);
      const updatedTask = {
        ...removed,
        status: destinationStatus,
      };
      tasksCopy.splice(destinationIndex, 0, updatedTask);
      return tasksCopy;
    });

    updateTaskStatusInServer(draggableId, destinationStatus);
  };

  const moveTask = (taskId, sourceIndex, destinationIndex) => {
    console.log(taskId);
    const tasksCopy = Array.isArray(tasks) ? [...tasks] : [];
    const [removed] = tasksCopy.splice(sourceIndex, 1);
    tasksCopy.splice(destinationIndex, 0, {
      ...removed,
      status: destinationIndex + 1,
    });
    return tasksCopy;
  };

  const updateTaskStatusInServer = (taskId, newStatus) => {
    axios
      .put(`/api/addTask/${taskId}`, { status: newStatus })
      .then(() => {
        refetch();
      })
      .catch((error) => {
        Swal.fire("Error!", error.message, "error");
      });
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="w-[95%] mx-auto">
        <div>
          <div className="flex justify-center items-center text-center font-semibold text-2xl p-5 bg-blue-50">
            <h1>Taskyear</h1>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-2 gap-2 text-center h-screen lg:mt-5 mt-3">
            {[1, 2, 3].map((status) => (
              <div key={status} className="bg-blue-50 rounded-lg">
                <div className="flex justify-center items-center gap-3 p-2">
                  <h1 className="text-lg font-semibold py-2">
                    {getStatusLabel(status)}
                  </h1>
                </div>
                <hr />
                <div className="m-5">
                  <Droppable droppableId={`${status}`} key={`${status}`}>
                    {(provided, snapshot) => (
                      <div ref={provided.innerRef} {...provided.droppableProps}>
                        {tasks
                          ?.filter((task) => task.status === status)
                          .map((task, index) => (
                            <Draggable
                              key={task?._id || index}
                              draggableId={task?._id || `${index}`}
                              index={index}
                            >
                              {(provided) => (
                                <TaskCard
                                  data={task}
                                  refetch={refetch}
                                  provided={provided}
                                />
                              )}
                            </Draggable>
                          ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DragDropContext>
  );
};

const getStatusLabel = (status) => {
  switch (status) {
    case 1:
      return "To do list";
    case 2:
      return "Ongoing List";
    case 3:
      return "Completed List";
    default:
      return "";
  }
};

export default TaskBoard;
