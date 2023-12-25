// /* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
// import { Fragment, useState } from "react";
// import { Dialog, Transition } from "@headlessui/react";
// import { useForm } from "react-hook-form";
// import { MdCancel } from "react-icons/md";
// import Swal from "sweetalert2";
// import useAxiosPublic from "../../../../hooks/useAxiosPublic";

// const TaskCard = ({ data, refetch }) => {
//   const { register, handleSubmit } = useForm();
//   const [isOpen, setIsOpen] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const { category, deadline, shortDetails, taskTitle, _id } = data || {};
//   const axios = useAxiosPublic();
//   const closeModal = () => {
//     setIsOpen(false);
//     setError(null);
//   };

//   const openModal = () => {
//     setIsOpen(true);
//   };
//   if (!data) {
//     // Handle the case when data is undefined
//     return null;
//   }
//   const ediDate = data.deadline;
//   // console.log(refetch);
//   const dateOnly = new Date(ediDate).toISOString().split("T")[0];
//   const handleDelete = (id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         axios.delete(`/api/addTask/${id}`).then((res) => {
//           if (res.data.deletedCount > 0) {
//             refetch();
//             Swal.fire({
//               title: "Deleted!",
//               text: "Your file has been deleted.",
//               icon: "success",
//             });
//           }
//         });
//       }
//     });
//   };
//   const onSubmit = async (data) => {
//     console.log(_id);
//     const newTaskData = {
//       category: data.category,
//       deadline: data.deadline,
//       shortDetails: data.shortDetails,
//       taskTitle: data.taskTitle,
//     };
//     // console.log(newTaskData);
//     const res = await axios.patch(`/api/addTask/${_id}`, newTaskData);
//     console.log(res);
//     if (res.data.modifiedCount) {
//       // reset();
//       refetch();
//       Swal.fire({
//         position: "top-end",
//         icon: "success",
//         title: "Task is updated.",
//         showConfirmButton: false,
//         timer: 1500,
//       });
//     }
//   };
//   return (
//     <div>
//       <div className="flex justify-between lg:flex-nowrap flex-wrap items-center gap-1 p-2 bg-white rounded-lg mb-5 cursor-move">
//         <div className="flex flex-col justify-start items-start text-center lg:w-4/5">
//           <h1 className="text-sm">{taskTitle}</h1>
//           <h1 className="text-xs">{category}</h1>
//           <h1 className="text-xs">{shortDetails}</h1>
//           <h1 className="text-xs">Deadline: {dateOnly}</h1>
//         </div>
//         <div className="flex flex-col gap-5 lg:w-1/5">
//           <button className="btn btn-sm" onClick={openModal}>
//             Edit
//           </button>
//           <div>
//             <Transition appear show={isOpen} as={Fragment}>
//               <Dialog as="div" className="relative z-10" onClose={closeModal}>
//                 <Transition.Child
//                   as={Fragment}
//                   enter="ease-out duration-300"
//                   enterFrom="opacity-0"
//                   enterTo="opacity-100"
//                   leave="ease-in duration-200"
//                   leaveFrom="opacity-100"
//                   leaveTo="opacity-0"
//                 >
//                   <div className="fixed inset-0 bg-black/25" />
//                 </Transition.Child>

//                 <div className="fixed inset-0 overflow-y-auto">
//                   <div className="flex min-h-full items-center justify-center p-4 text-center">
//                     <Transition.Child
//                       as={Fragment}
//                       enter="ease-out duration-300"
//                       enterFrom="opacity-0 scale-95"
//                       enterTo="opacity-100 scale-100"
//                       leave="ease-in duration-200"
//                       leaveFrom="opacity-100 scale-100"
//                       leaveTo="opacity-0 scale-95"
//                     >
//                       <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
//                         <div className="-mt-4 float-right p-2">
//                           <button
//                             type="button"
//                             className="text-red-700 text-xl"
//                             onClick={closeModal}
//                           >
//                             <MdCancel />
//                           </button>
//                         </div>
//                         <div>
//                           <form
//                             onSubmit={handleSubmit(onSubmit)}
//                             className="flex flex-col justify-center items-center gap-2 w-full"
//                           >
//                             <input
//                               {...register("taskTitle")}
//                               className="input input-bordered w-full"
//                               placeholder="Task Title"
//                               defaultValue={data.taskTitle}
//                               required
//                             />
//                             <select
//                               {...register("category", { required: true })}
//                               className="select select-bordered w-full"
//                               required
//                               defaultValue={data.category}
//                             >
//                               <option value="">Select Priority</option>
//                               <option value="low">Low</option>
//                               <option value="moderate">Moderate</option>
//                               <option value="high">High</option>
//                             </select>
//                             <textarea
//                               {...register("shortDetails")}
//                               placeholder="Short Details"
//                               className="textarea textarea-bordered h-24 w-full"
//                               defaultValue={data.shortDetails}
//                               required
//                             />
//                             <input
//                               type="date"
//                               {...register("deadline", {
//                                 valueAsDate: true,
//                               })}
//                               required
//                               className="input input-bordered w-full"
//                               defaultValue={data.deadline}
//                             />
//                             <input
//                               className={`bg-blue-700 w-full p-2 rounded-lg text-white font-semibold cursor-pointer hover:bg-blue-900 ${
//                                 loading ? "opacity-50 cursor-not-allowed" : ""
//                               }`}
//                               type="submit"
//                               disabled={loading}
//                             />
//                           </form>
//                         </div>
//                       </Dialog.Panel>
//                     </Transition.Child>
//                   </div>
//                 </div>
//               </Dialog>
//             </Transition>
//           </div>
//           <button className="btn btn-sm" onClick={() => handleDelete(data._id)}>
//             Delete
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TaskCard;

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { MdCancel } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";

const TaskCard = ({ data, refetch, provided }) => {
  // console.log(data);
  // console.log(provided);
  const { register, handleSubmit } = useForm();
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { category, deadline, shortDetails, taskTitle, _id } = data || {};
  const axios = useAxiosPublic();
  const closeModal = () => {
    setIsOpen(false);
    setError(null);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  if (!data) {
    // Handle the case when data is undefined
    return null;
  }
  const ediDate = data.deadline;
  const dateOnly = new Date(ediDate).toISOString().split("T")[0];
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
  const onSubmit = async (data) => {
    console.log(_id);
    const newTaskData = {
      category: data.category,
      deadline: data.deadline,
      shortDetails: data.shortDetails,
      taskTitle: data.taskTitle,
    };
    const res = await axios.patch(`/api/addTask/${_id}`, newTaskData);
    console.log(res);
    if (res.data.modifiedCount) {
      refetch();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Task is updated.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <div className="flex justify-between lg:flex-nowrap flex-wrap items-center gap-1 p-2 bg-white rounded-lg mb-5 cursor-pointer">
        <div className="flex flex-col justify-start items-start text-center lg:w-4/5 gap-2">
          <h1 className="text-sm font-semibold">{taskTitle}</h1>
          <h1 className="text-xs bg-blue-700 rounded-lg w-16 text-start p-1 pl-2 font-semibold text-white">
            {category}
          </h1>
          <h1 className="text-xs">{shortDetails}</h1>
          <h1 className="text-xs text-gray-900 font-medium">
            Deadline: {dateOnly}
          </h1>
        </div>
        <div className="flex flex-col gap-5 lg:w-1/5">
          <button className="btn btn-sm" onClick={openModal}>
            Edit
          </button>
          <div>
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
                              defaultValue={data.taskTitle}
                              required
                            />
                            <select
                              {...register("category", { required: true })}
                              className="select select-bordered w-full"
                              required
                              defaultValue={data.category}
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
                              defaultValue={data.shortDetails}
                              required
                            />
                            <input
                              type="date"
                              {...register("deadline", {
                                valueAsDate: true,
                              })}
                              required
                              className="input input-bordered w-full"
                              defaultValue={data.deadline}
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
          </div>
          <button className="btn btn-sm" onClick={() => handleDelete(data._id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
