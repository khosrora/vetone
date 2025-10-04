import { base_api } from "@/lib/fetch/base_api";
import { signOut } from "next-auth/react";
import { LINK_LANDINGPAGE } from "@repo/lib/links";

// Helper function to handle 401 errors
const handleUnauthorized = async (response: Response) => {
  if (response.status === 401) {
    console.log("401 Unauthorized - signing out user");
    await signOut({ redirect: true, callbackUrl: LINK_LANDINGPAGE });
  }
};

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
    await handleUnauthorized(res);
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
    await handleUnauthorized(res);
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
    await handleUnauthorized(res);
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
    await handleUnauthorized(res);
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const authFetcher = async ([url, token]: [string, string]) => {
  const res = await fetch(`${base_api}${url}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: !!token ? "Bearer " + token : "",
    },
  });

  if (!res.ok) {
    await handleUnauthorized(res);
    throw new Error("Failed to fetch " + url);
  }

  return res.json();
};
