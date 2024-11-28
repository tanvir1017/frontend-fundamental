import axios from "axios";

export const getData = async () => {
  return axios.get("http://localhost:5000/api/v1/services");
};
// export const getData = async () => {
//   const response = await fetch("http://localhost:5000/api/v1/servicessdfasd");
//   const result = await response.json();

//   if (!result.success) {
//     throw new Error(`Something went wrong!`);
//   }

//   return result;
// };
