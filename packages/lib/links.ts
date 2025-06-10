const LINK_LANDINGPAGE: string =
  process.env.NODE_ENV === "development"
    ? "http://vetone.test:3010/"
    : "https://vet-one.ir/";

const LINK_LANDINGPAGE_LOGIN: string =
  process.env.NODE_ENV === "development"
    ? "http://vetone.test:3010/login"
    : "https://vet-one.ir/login";

const LINK_DASHBOARD_VET: string =
  process.env.NODE_ENV === "development"
    ? "http://dashboard.vetone.test:3020/"
    : "https://vet-one.ir/veterinarian_dashboard";

const LINK_DASHBOARD_CLIENT: string =
  process.env.NODE_ENV === "development"
    ? "http://client.vetone.test:3030/"
    : "https://vet-one.ir/client";

export const base_path_vet: string =
  process.env.NODE_ENV === "development" ? "" : "/veterinarian_dashboard";

export const base_path_client: string =
  process.env.NODE_ENV === "development" ? "" : "/client";

const DOMAIN: string =
  process.env.NODE_ENV === "development" ? "vetone.test" : "vet-one.ir";

const IMAGE_PLACEHOLDER: string = "https://avatar.iran.liara.run/public";

export {
  LINK_LANDINGPAGE,
  DOMAIN,
  LINK_DASHBOARD_VET,
  LINK_DASHBOARD_CLIENT,
  IMAGE_PLACEHOLDER,
  LINK_LANDINGPAGE_LOGIN,
};
