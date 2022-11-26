import sanityClient from "../sanity";

const query = `*[_type == "skill"]`;
const getSkills = async () => {
  const data = await sanityClient.fetch(query);
  return data;
};

export default getSkills;
