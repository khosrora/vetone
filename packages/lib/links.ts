const LINK_LANDINGPAGE: string =
  process.env.NODE_ENV === "development" ? "http://vetone.test:3010/" : "";

const LINK_DASHBOARD_VET: string =
  process.env.NODE_ENV === "development"
    ? "http://dashboard.vetone.test:3020/"
    : "";

const LINK_DASHBOARD_CLIENT: string =
  process.env.NODE_ENV === "development"
    ? "http://client.vetone.test:3030/"
    : "";

const DOMAIN: string =
  process.env.NODE_ENV === "development" ? "vetone.test" : "";

export { LINK_LANDINGPAGE, DOMAIN, LINK_DASHBOARD_VET, LINK_DASHBOARD_CLIENT };
