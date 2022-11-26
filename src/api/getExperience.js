import sanityClient from "../sanity";

const query = `*[_type == "experience"]{
      ...,
      technologies[]->
    }`;
const getExperience = async () => {
  const data = await sanityClient.fetch(query);
  return data;
};

export default getExperience;
