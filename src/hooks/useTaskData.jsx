/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
const useTaskData = () => {
  // const [todo, setTodo] = useState([]);
  // const [ongoing, setOngoing] = useState([]);
  // const [complete, setComplete] = useState([]);
  const axios = useAxiosPublic();
  const { user } = useAuth();
  const getData = async () => {
    const url = `/api/addTask/?email=${user?.email}`;
    const res = await axios.get(url);
    return res.data;
  };
  // res.data
  const {
    data: taskData,
    isLoading,
    refetch,
    error,
  } = useQuery({
    queryKey: ["alltaskData", user?.email],
    queryFn: getData,
  });
  return { taskData, isLoading, error, refetch };
};

export default useTaskData;
