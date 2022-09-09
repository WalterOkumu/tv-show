import heartIcon from '../assets/heart.svg';
import commentsPopUp from './commentsPopUp';
import postLikes from './postLikes';

const populateMedia = (media, imagePath, likes) => {
  const mediaCard = document.createElement('div');
  mediaCard.className = 'media-card';

  const imageDiv = document.createElement('div');
  imageDiv.className = 'image-container';

  const cardImage = document.createElement('img');
  cardImage.className = 'card-image';
  cardImage.alt = 'card-image';
  cardImage.src = imagePath;

  const cardDetails = document.createElement('div');
  cardDetails.className = 'card-details';

  const cardTitle = document.createElement('p');
  cardTitle.className = 'card-title';
  cardTitle.innerText = media.original_name;

  const cardTitleContainer = document.createElement('div');
  cardTitleContainer.className = 'card-title-container';
  const likeIcon = document.createElement('img');
  likeIcon.className = 'like-icon';
  likeIcon.alt = 'like-icon';
  likeIcon.src = heartIcon;
  likeIcon.addEventListener('click', () => {
    postLikes(media.id);
    setTimeout(window.location.reload(), 2000);
  });

  const likeTextDiv = document.createElement('div');
  likeTextDiv.className = 'like-text-container';

  const likeText = document.createElement('span');
  likeText.className = 'like-text';
  if (likes === undefined) {
    likes = '0';
  }
  likeText.innerText = `${likes} Likes`;

  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'button-container';

  const commentButton = document.createElement('button');
  commentButton.className = 'comment-button';
  commentButton.type = 'button';
  commentButton.innerText = 'Comments';
  commentButton.id = media.id;
  commentButton.addEventListener('click', () => commentsPopUp(media, imagePath));

  const reservationButton = document.createElement('button');
  reservationButton.className = 'reservation-button';
  reservationButton.type = 'button';
  reservationButton.innerText = 'Reservations';

  imageDiv.appendChild(cardImage);

  likeTextDiv.appendChild(likeText);

  cardTitleContainer.appendChild(cardTitle);
  cardTitleContainer.appendChild(likeIcon);

  cardDetails.appendChild(cardTitleContainer);
  cardDetails.appendChild(likeTextDiv);

  buttonContainer.appendChild(commentButton);
  buttonContainer.appendChild(reservationButton);

  mediaCard.appendChild(imageDiv);
  mediaCard.appendChild(cardDetails);
  mediaCard.appendChild(buttonContainer);

  return mediaCard;
};

export default populateMedia;