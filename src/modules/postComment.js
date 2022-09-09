const baseURL = process.env.INVOLVEMENT_API;
const apiKey = process.env.INVOLVEMENT_API_KEY;
const url = `${baseURL}/apps/${apiKey}/comments`;

const postComment = async (mediaID, usernameData, commentData) => fetch(url, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    item_id: mediaID,
    username: usernameData,
    comment: commentData,
  }),
})
  .then((response) => response);

export default postComment;