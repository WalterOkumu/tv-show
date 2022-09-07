const getMedia = (url) => fetch(url)
  .then((response) => response.json())
  .then((response) => response.results);

export default getMedia;