import axios from "axios";
import { base_api } from "@/lib/fetch/base_api";

export const getDataAPI = async (array: [url: string, token?: string]) => {
  const res = await axios.get(`${base_api}${array[0]}`, {
    headers: {
      Authorization: !!array[1] ? "Bearer " + array[1] : null,
    },
  });
  return res;
};
export const getData = async (array: [url: string, token?: string]) => {
  const res = await axios.get(`${array[0]}`, {
    headers: {
      Authorization: !!array[1] ? "Bearer " + array[1] : null,
    },
  });
  return res;
};

export const fetcher = (url: [url: string, token?: string]) =>
  getDataAPI(url).then((res) => res.data);

export const postDataAPI = async (url: string, post: any, token?: string) => {
  const res = await axios.post(`${base_api}${url}`, post, {
    headers: {
      Authorization: !!token ? "Bearer " + token : null,
    },
  });
  return res;
};

export const putDataAPI = async (url: string, post: {}, token?: string) => {
  const res = await axios.put(`${base_api}${url}`, post, {
    headers: { Authorization: "Bearer " + token },
  });
  return res;
};
export const patchDataAPI = async (url: string, post: any, token?: string) => {
  const res = await axios.patch(`${base_api}${url}`, post, {
    headers: {
      Authorization: !!token ? "Bearer " + token : null,
    },
  });
  return res;
};
export const deleteDataAPI = async (url: string, token?: string) => {
  const res = await axios.delete(`${base_api}${url}`, {
    headers: {
      Authorization: +!!token ? "Bearer " + token : null,
    },
  });
  return res;
};
