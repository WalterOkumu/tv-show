import './styles/styles.scss';
import addFavicon from './modules/addFavicon';
import fetchMedia from './modules/fetchMedia';
import populateMedia from './modules/populateMedia';
import getImages from './modules/getImages';

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

    for (let i = 0; i < mediaList.length; i += 1) {
      mediaContainer.appendChild(populateMedia(mediaList[i], imageList[i]));
    }

    mainTag.appendChild(mediaContainer);
  }
};