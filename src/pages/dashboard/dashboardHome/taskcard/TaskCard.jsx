/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";

const TaskCard = ({ data, refetch }) => {
  const ediDate = data.deadline;
  const dateOnly = new Date(ediDate).toISOString().split("T")[0];
  const axios = useAxiosPublic();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`/api/addTask/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <div className="flex justify-between lg:flex-nowrap flex-wrap items-center gap-1 p-2 bg-white rounded-lg mb-5 cursor-move">
        <div className="flex flex-col justify-start items-start text-center lg:w-4/5">
          <h1 className="text-sm">{data.taskTitle}</h1>
          <h1 className="text-xs">{data.category}</h1>
          <h1 className="text-xs">{data.shortDetails}</h1>
          <h1 className="text-xs">Deadline: {dateOnly}</h1>
        </div>
        <div className="flex flex-col gap-5 lg:w-1/5">
          <button className="btn btn-sm">Edit</button>
          <button className="btn btn-sm" onClick={() => handleDelete(data._id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
