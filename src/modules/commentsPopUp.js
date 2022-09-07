import closeIcon from '../assets/close.svg';
// import postComment from './postComment';

const commentsPopUp = (media, imagePath) => {
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

  // const commentList = document.createElement('ul');

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
  // submitNewComment.addEventListener('click', () => {
  //   postComment(media.id, newCommentName.value, newCommentInsights.value);
  // });

  closeIconDiv.appendChild(closeIconImage);

  headerImageDiv.appendChild(headerImage);

  header.appendChild(closeIconDiv);
  header.appendChild(headerImageDiv);

  contentContainer.appendChild(title);
  contentContainer.appendChild(description);

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

  // console.log(media);
};

export default commentsPopUp;