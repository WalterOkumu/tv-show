const baseURL = process.env.INVOLVEMENT_API;
const apiKey = process.env.INVOLVEMENT_API_KEY;
const url = `${baseURL}/apps/${apiKey}/comments?item_id=`;

const fetchComments = (mediaID) => fetch(`${url}${mediaID}`, {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
})
  .then((response) => response.json())
  .then((response) => response);

export default fetchComments;