import sanityClient from "../sanity";

const query = `
*[_type == "project"] {
      ...,
      technologies[]->
    }`;
const getProjects = async () => {
  const data = await sanityClient.fetch(query);
  return data;
};

export default getProjects;
