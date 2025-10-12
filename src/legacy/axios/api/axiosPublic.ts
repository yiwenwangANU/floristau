import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const axiosPublic = axios.create({
  baseURL: API_BASE_URL,
  paramsSerializer: {
    indexes: null, // FlowerTypeIds=1&FlowerTypeIds=2
  },
});

export default axiosPublic;
