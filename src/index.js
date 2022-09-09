import addFavicon from './modules/addFavicon';
import fetchMedia from './modules/fetchMedia';
import populateMedia from './modules/populateMedia';
import getImages from './modules/getImages';
import './styles/styles.scss';
import getLikes from './modules/getLikes';

const baseUrl = process.env.BASE_URL;
const apiKey = process.env.API_KEY;
const url = `${baseUrl}/trending/tv/week?api_key=${apiKey}`;

window.onload = async () => {
  addFavicon();
  if (url !== '') {
    const mediaList = await fetchMedia(url);
    const imageList = await getImages(mediaList);

    const mainTag = document.getElementById('main');

    const mediaContainer = document.createElement('div');

    mediaContainer.className = 'media-container';

    const likesList = await getLikes();

    for (let i = 0; i < mediaList.length; i += 1) {
      let movieLikes;

      for (let j = 0; j < likesList.length; j += 1) {
        if (likesList[j].item_id === mediaList[i].id) {
          movieLikes = likesList[j].likes;
        }
      }

      mediaContainer.appendChild(populateMedia(mediaList[i], imageList[i], movieLikes));
    }

    mainTag.appendChild(mediaContainer);
  }
};