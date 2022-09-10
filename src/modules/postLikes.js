const baseURL = process.env.INVOLVEMENT_API;
const apiKey = process.env.INVOLVEMENT_API_KEY;
const likesURL = `${baseURL}/apps/${apiKey}/likes`;

const postLikes = (itemID) => fetch(likesURL, {
  method: 'POST',
  body: JSON.stringify({
    item_id: itemID,
  }),
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => response.text());

export default postLikes;