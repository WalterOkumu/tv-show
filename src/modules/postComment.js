const baseURL = process.env.INVOLVEMENT_API;
const apiKey = process.env.INVOLVEMENT_API_KEY;
const url = `${baseURL}/apps/${apiKey}/comments`;

const postComment = (mediaID, username, comment) => fetch(url, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: {
    item_id: mediaID,
    username,
    comment,
  },
})
  .then((response) => response.json());

export default postComment;