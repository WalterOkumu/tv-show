const getMedia = (url) => fetch(url)
  .then((response) => response.json())
  .then((response) => response.results)
  .catch((error) => console.log(error));

export default getMedia;