const baseURL = process.env.INVOLVEMENT_API;
const apiKey = process.env.INVOLVEMENT_API_KEY;
const url = `${baseURL}/apps/${apiKey}/comments`;

const getComments = () => fetch(url, {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
})
  .then((response) => response.json())
  .then((response) => response.results);

export default getComments;