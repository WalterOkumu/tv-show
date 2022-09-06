import addFavicon from './modules/addFavicon';
import getMedia from './modules/getMedia';
import './styles/styles.css';
import logo from './assets/faviconio-logo/logo.svg';

document.querySelector('.logo').src = logo;

const baseUrl = process.env.BASE_URL;
const apiKey = process.env.API_KEY;
const url = `${baseUrl}/trending/all/day?api_key=${apiKey}`;

window.onload = async () => {
  addFavicon();
  const mediaList = await getMedia(url);
  console.log(mediaList);
};