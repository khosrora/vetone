const LINK_LANDINGPAGE: string =
  process.env.NODE_ENV === "development" ? "http://vetone.test:3010/" : "";

const LINK_DASHBOARD_VET: string =
  process.env.NODE_ENV === "development"
    ? "http://vetone.dashboard.test:3020/"
    : "";

const LINK_DASHBOARD_CLIENT: string =
  process.env.NODE_ENV === "development"
    ? "http://vetone.client.test:3030/"
    : "";

const DOMAIN_LOCAL: string =
  process.env.NODE_ENV === "development" ? "vetone.test" : "sirang.co";
const DOMAIN_SERVER: string =
  process.env.NODE_ENV === "development" ? "vetone.test" : "sirang.co";

export {
  LINK_LANDINGPAGE,
  DOMAIN_LOCAL,
  DOMAIN_SERVER,
  LINK_DASHBOARD_VET,
  LINK_DASHBOARD_CLIENT,
};
