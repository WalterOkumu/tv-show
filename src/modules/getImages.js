import fetchImage from './fetchImage';

const getImages = async (data) => {
  const imageList = [];

  for (let i = 0; i < data.length; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    const path = await fetchImage(data[i].poster_path);
    imageList.push(path);
  }

  return imageList;
};

export default getImages;