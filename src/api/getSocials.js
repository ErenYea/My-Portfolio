import sanityClient from "../sanity";

const query = `*[_type == "social"]`;
const getSocials = async () => {
  const data = await sanityClient.fetch(query);
  return data;
};

export default getSocials;
