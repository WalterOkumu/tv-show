import fetchComments from './fetchComments';

const getComments = async (mediaID) => {
  let data = await fetchComments(mediaID).finally((response) => response);

  if (data.error) {
    data = [];
    data[0] = 'No comment found';
    return data;
  }
  return data;
};

export default getComments;