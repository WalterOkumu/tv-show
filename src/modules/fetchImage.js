const ImageURL = process.env.IMAGE_URL;

const fetchImage = (imagePath) => fetch(`${ImageURL}${imagePath}`)
  .then((response) => response)
  .then((response) => response.url);

export default fetchImage;