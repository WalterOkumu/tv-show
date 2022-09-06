import appleTouchIcon from '../assets/faviconio-logo/apple-touch-icon.png';
import icon32 from '../assets/faviconio-logo/favicon-32x32.png';
import icon16 from '../assets/faviconio-logo/favicon-16x16.png';

const addFavicon = () => {
  const favAppleTouchIcon = document.createElement('link');
  const favIcon32 = document.createElement('link');
  const favIcon16 = document.createElement('link');

  favAppleTouchIcon.rel = 'apple-touch-icon';
  favAppleTouchIcon.sizes = '180x180';
  favAppleTouchIcon.href = appleTouchIcon;

  favIcon32.rel = 'icon';
  favIcon32.sizes = '32x32';
  favIcon32.type = 'image/png';
  favIcon32.href = icon32;

  favIcon16.rel = 'icon';
  favIcon16.sizes = '16x16';
  favIcon16.type = 'image/png';
  favIcon16.href = icon16;

  window.document.head.appendChild(favAppleTouchIcon);
  window.document.head.appendChild(favIcon32);
  window.document.head.appendChild(favIcon16);
};

export default addFavicon;