import closeIcon from '../assets/close.svg';
import getComments from './getComments';
import postComment from './postComment';
import updateCommentsModal from './updateCommentsModal';

const commentsPopUp = async (media, imagePath) => {
  const commentData = await getComments(media.id);

  const commentsContainer = document.createElement('div');
  commentsContainer.className = 'comments-container';

  const commentsModal = document.createElement('div');
  commentsModal.className = 'comments-popup';

  const header = document.createElement('div');
  header.className = 'comments-header';

  const headerImageDiv = document.createElement('div');
  headerImageDiv.className = 'header-image-container';

  const headerImage = document.createElement('img');
  headerImage.src = imagePath;
  headerImage.alt = imagePath;
  headerImage.className = 'comments-image';

  const closeIconDiv = document.createElement('div');
  closeIconDiv.className = 'close-icon-container';

  const closeIconImage = document.createElement('img');
  closeIconImage.src = closeIcon;
  closeIconImage.alt = 'close-icon';
  closeIconImage.className = 'comments-close-icon';
  closeIconImage.addEventListener('click', () => {
    commentsContainer.style.display = 'none';
  });

  const contentContainer = document.createElement('div');
  contentContainer.className = 'content-container';

  const title = document.createElement('p');
  title.className = 'tv-title';
  title.innerText = media.original_name;

  const description = document.createElement('p');
  description.className = 'description';
  description.innerText = media.overview;

  const commentList = document.createElement('ul');
  commentList.className = 'comments-list';

  if (commentData[0] === 'No comment found') {
    const commentListItem = document.createElement('li');
    commentListItem.className = 'comment-list-item';
    commentList.innerText = 'Comments';
    commentListItem.innerText = 'No comment found';
    commentList.appendChild(commentListItem);
  } else {
    commentList.innerText = `Comments (${commentData.length})`;
    for (let i = 0; i < commentData.length; i += 1) {
      const commentListItem = document.createElement('li');
      commentListItem.className = 'comment-list-item';
      commentListItem.innerText = `${commentData[i].creation_date} ${commentData[i].username}: ${commentData[i].comment}`;
      commentList.appendChild(commentListItem);
    }
  }

  const newCommentContainer = document.createElement('div');
  newCommentContainer.className = 'new-comment';

  const newCommentTitle = document.createElement('p');
  newCommentTitle.className = 'new-comment-title';
  newCommentTitle.innerText = 'Add a Comment';

  const commentForm = document.createElement('form');
  commentForm.className = 'new-comment-form';
  commentForm.id = 'form';

  const newCommentName = document.createElement('input');
  newCommentName.className = 'new-comment-name';
  newCommentName.type = 'text';
  newCommentName.name = 'newCommentName';
  newCommentName.placeholder = 'Your name';

  const newCommentInsights = document.createElement('input');
  newCommentInsights.className = 'new-comment-insights';
  newCommentInsights.name = 'newCommentInsights';
  newCommentInsights.placeholder = 'Your insights';

  const submitNewComment = document.createElement('button');
  submitNewComment.className = 'submit-comment-button';
  submitNewComment.type = 'button';
  submitNewComment.innerText = 'Comment';
  submitNewComment.addEventListener('click', () => {
    if (newCommentName.value !== '' || newCommentInsights.value !== '') {
      postComment(media.id, newCommentName.value, newCommentInsights.value);
      newCommentName.value = '';
      newCommentInsights.value = '';
      setTimeout(async () => {
        await updateCommentsModal(media.id);
      }, 3000);
    }
  });

  closeIconDiv.appendChild(closeIconImage);

  headerImageDiv.appendChild(headerImage);

  header.appendChild(closeIconDiv);
  header.appendChild(headerImageDiv);

  contentContainer.appendChild(title);
  contentContainer.appendChild(description);
  contentContainer.appendChild(commentList);

  newCommentContainer.appendChild(newCommentTitle);

  commentForm.appendChild(newCommentName);
  commentForm.appendChild(newCommentInsights);
  commentForm.appendChild(submitNewComment);

  newCommentContainer.appendChild(commentForm);

  commentsModal.appendChild(header);
  commentsModal.appendChild(contentContainer);
  commentsModal.appendChild(newCommentContainer);

  commentsContainer.appendChild(commentsModal);

  document.body.appendChild(commentsContainer);
};

export default commentsPopUp;