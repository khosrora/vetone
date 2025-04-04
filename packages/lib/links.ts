const LINK_LANDINGPAGE: string =
  process.env.NODE_ENV === "development"
    ? "http://vetone.test:3010/"
    : "https://vetone.cafesiran.ir/";

const LINK_DASHBOARD_VET: string =
  process.env.NODE_ENV === "development"
    ? "http://dashboard.vetone.test:3020/"
    : "https://vetone.cafesiran.ir/veterinarian_dashboard";

const LINK_DASHBOARD_CLIENT: string =
  process.env.NODE_ENV === "development"
    ? "http://client.vetone.test:3030/"
    : "https://vetone.cafesiran.ir/client";

const DOMAIN: string =
  process.env.NODE_ENV === "development"
    ? "vetone.test"
    : "vetone.cafesiran.ir";

const IMAGE_PLACEHOLDER: string = "https://avatar.iran.liara.run/public";

export {
  LINK_LANDINGPAGE,
  DOMAIN,
  LINK_DASHBOARD_VET,
  LINK_DASHBOARD_CLIENT,
  IMAGE_PLACEHOLDER,
};
