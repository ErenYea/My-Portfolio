import sanityClient from "../sanity";

const query = `*[_type == "pageInfo"][0]`;
const getPageInfo = async () => {
  const data = await sanityClient.fetch(query);
  return data;
};

export default getPageInfo;
