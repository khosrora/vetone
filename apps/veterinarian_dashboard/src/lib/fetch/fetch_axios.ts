import axiosInstance from "./axios-config";
import { base_api } from "@/lib/fetch/base_api";

export const getDataAPI = async (array: [url: string, token?: string]) => {
  const res = await axiosInstance.get(`${base_api}${array[0]}`, {
    headers: {
      Authorization: !!array[1] ? "Bearer " + array[1] : null,
    },
  });
  return res;
};
export const getData = async (array: [url: string, token?: string]) => {
  const res = await axiosInstance.get(`${array[0]}`, {
    headers: {
      Authorization: !!array[1] ? "Bearer " + array[1] : null,
    },
  });
  return res;
};

export const fetcher = (url: [url: string, token?: string]) =>
  getDataAPI(url).then((res) => res.data);

export const postDataAPI = async (url: string, post: any, token?: string) => {
  const res = await axiosInstance.post(`${base_api}${url}`, post, {
    headers: {
      Authorization: !!token ? "Bearer " + token : null,
    },
  });
  return res;
};

export const putDataAPI = async (url: string, post: {}, token?: string) => {
  const res = await axiosInstance.put(`${base_api}${url}`, post, {
    headers: { Authorization: "Bearer " + token },
  });
  return res;
};
export const patchDataAPI = async (url: string, post: any, token?: string) => {
  const res = await axiosInstance.patch(`${base_api}${url}`, post, {
    headers: {
      Authorization: !!token ? "Bearer " + token : null,
    },
  });
  return res;
};
export const deleteDataAPI = async (url: string, token?: string) => {
  const res = await axiosInstance.delete(`${base_api}${url}`, {
    headers: {
      Authorization: !!token ? "Bearer " + token : null,
    },
  });
  return res;
};
