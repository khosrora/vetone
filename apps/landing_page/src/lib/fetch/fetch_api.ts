import { base_api } from "@/lib/fetch/base_api";

export const post_method = async (
  url: string,
  data: {},
  token: string | null = null
): Promise<any> => {
  const res = await fetch(`${base_api}${url}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: !!token ? "Bearer " + token : "",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res;
};

export const put_method = async (
  url: string,
  data: {},
  token: string | null = null
): Promise<any> => {
  const res = await fetch(`${base_api}${url}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: !!token ? "Bearer " + token : "",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return await res.json();
};

export const patch_method = async (
  url: string,
  data: {} | any,
  token: string | null = null
): Promise<any> => {
  const res = await fetch(`${base_api}${url}`, {
    method: "PATCH",
    headers: {
      // 'Accept': 'application/json',
      // "Content-Type": "application/x-www-form-urlencoded",
      Authorization: !!token ? "Bearer " + token : "",
    },
    body: data,
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return await res.json();
};
export const delete_method = async (
  url: string,
  token: string | null = null
): Promise<any> => {
  try {
    const res = await fetch(`${base_api}${url}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: !!token ? "Bearer " + token : "",
      },
    });
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const get_method = async (
  url: string,
  token: string | null = null
): Promise<any> => {
  const res = await fetch(`${base_api}${url}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: !!token ? "Bearer " + token : "",
    },
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
