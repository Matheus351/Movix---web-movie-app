import axios from "axios";

const BASE_URl = "https://api.themoviedb.org/3";
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

const headers = {
  Authorization: "Bearer " + API_TOKEN,
};

export const fetchData = async (url: string, params?: string) => {
  try {
    const { data } = await axios.get(BASE_URl + url, {
      headers,
      params,
    });

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default {};
