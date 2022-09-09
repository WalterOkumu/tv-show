import getComments from './getComments';
import removeChildNode from './removeChildNodes';

const updateCommentsModal = async (mediaID) => {
  const commentList = document.getElementsByClassName('comments-list')[0];

  removeChildNode(commentList);

  const commentData = await getComments(mediaID);

  commentList.innerHTML = `Comments (${commentData.length})`;

  for (let i = 0; i < commentData.length; i += 1) {
    const commentListItem = document.createElement('li');
    commentListItem.className = 'comment-list-item';
    commentListItem.innerText = `${commentData[i].creation_date} ${commentData[i].username}: ${commentData[i].comment}`;
    commentList.appendChild(commentListItem);
  }
};

export default updateCommentsModal;