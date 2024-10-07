import axios from "axios";

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getData = async () => {
  return client("/posts");
};
