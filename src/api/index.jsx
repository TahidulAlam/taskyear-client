import axiosSecure from ".";

export const getToken = async (email) => {
  const { data } = await axiosSecure.post("/jwt", { email });
  console.log("Token recived from the server ------> ", data);
  return data;
};

export const clearToken = async () => {
  const { data } = await axiosSecure.get("/logout");
  console.log("Token clear ------> ", data);
  return data;
};
