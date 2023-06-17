import axios from "../axios";

const handleLoginApi = (email, password) => {
  //return axios.post("/api/login", { email: email, password: password });
  return axios.post("/api/login", { email, password });
};

export { handleLoginApi };
