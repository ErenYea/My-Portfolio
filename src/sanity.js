import sanityClient from "@sanity/client";
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "2he2fkd4",
  apiVersion: "2022-11-10",
  useCdn: process.env.NODE_ENV === "production",
};

export default sanityClient(config);
export const urlFor = (source) => createImageUrlBuilder(config).image(source);
