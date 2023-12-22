/* eslint-disable no-unused-vars */
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { MdCancel } from "react-icons/md";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAuth from "../../../hooks/useAuth";
import useTaskData from "../../../hooks/usetaskData";
import TaskCard from "./taskcard/TaskCard";
import Swal from "sweetalert2";

const DashBoardHome = () => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { taskData, isLoading, refetch } = useTaskData();
  const axios = useAxiosPublic();
  const { register, handleSubmit } = useForm();

  const closeModal = () => {
    setIsOpen(false);
    setError(null);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const onSubmit = (data) => {
    const newData = { email: user.email, ...data };
    console.log(newData);
    try {
      setLoading(true);
      const res = axios.post("/api/addTask", newData);
      refetch();
      closeModal();
      console.log(res);
      const result = res.data;
      console.log(result);
      refetch();
      // console.log(res);
      if (res.data.acknowledged) {
        Swal.fire({
          title: "Task added!",
          text: "Task added Successfully.",
          icon: "success",
        });
      }
      // console.log(response);
      setError(null);
    } catch (error) {
      console.error("Error adding task:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  // console.log(taskData);
  return (
    <div className="w-[95%] mx-auto">
      <div className="flex justify-center items-center text-center font-semibold text-2xl p-5 bg-blue-50">
        <h1>Taskyear</h1>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-2 gap-2 text-center h-screen lg:mt-5 mt-3">
        <div className="bg-blue-50 rounded-lg">
          <div className="flex justify-center items-center gap-3 p-2">
            <h1 className="text-lg font-semibold py-2">To do list</h1>{" "}
            <button
              type="button"
              onClick={openModal}
              className="rounded-md bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
            >
              Create a Task
            </button>
          </div>
          <hr />
          <div>
            <div className=""></div>
            <Transition appear show={isOpen} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black/25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <div className="-mt-4 float-right p-2">
                          <button
                            type="button"
                            className="text-red-700 text-xl"
                            onClick={closeModal}
                          >
                            <MdCancel />
                          </button>
                        </div>
                        <div>
                          <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="flex flex-col justify-center items-center gap-2 w-full"
                          >
                            <input
                              {...register("taskTitle")}
                              className="input input-bordered w-full"
                              placeholder="Task Title"
                              required
                            />
                            <select
                              {...register("category", { required: true })}
                              className="select select-bordered w-full"
                              required
                            >
                              <option value="">Select Priority</option>
                              <option value="low">Low</option>
                              <option value="moderate">Moderate</option>
                              <option value="high">High</option>
                            </select>
                            <textarea
                              {...register("shortDetails")}
                              placeholder="Short Details"
                              className="textarea textarea-bordered h-24 w-full"
                              required
                            />
                            <input
                              type="date"
                              {...register("deadline", {
                                valueAsDate: true,
                              })}
                              required
                              className="input input-bordered w-full"
                            />
                            <input
                              className={`bg-blue-700 w-full p-2 rounded-lg text-white font-semibold cursor-pointer hover:bg-blue-900 ${
                                loading ? "opacity-50 cursor-not-allowed" : ""
                              }`}
                              type="submit"
                              disabled={loading}
                            />
                          </form>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
            <div className="m-5">
              {taskData?.map((dd, index) => (
                <TaskCard key={dd?.id} data={dd} refetch={refetch} />
              ))}
            </div>
          </div>
        </div>
        <div className="bg-blue-50 rounded-lg">
          <h1 className="text-lg font-semibold p-4">Ongoing List</h1>
          <hr />
        </div>
        <div className="bg-blue-50 rounded-lg">
          <h1 className="text-lg font-semibold p-4">Completed List</h1>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default DashBoardHome;
