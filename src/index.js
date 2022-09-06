import addFavicon from './modules/addFavicon';
import './styles/styles.css';
import logo from './assets/faviconio-logo/logo.svg';

document.querySelector('.logo').src = logo;

window.onload = () => {
  addFavicon();
};