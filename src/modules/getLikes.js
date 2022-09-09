const baseURL = process.env.INVOLVEMENT_API;
const apiKey = process.env.INVOLVEMENT_API_KEY;
const url = `${baseURL}/apps/${apiKey}/likes`;

const getLikes = async () => {
  const likesList = await fetch(url)
    .then((response) => response.json())
    .then((response) => response);

  return likesList;
};

export default getLikes;
