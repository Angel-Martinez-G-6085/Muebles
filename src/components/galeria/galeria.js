import './galeria.css';
import GALERIA from './galeria.html';

const loadGaleria = () => {
  const header = document.querySelector('.header');
  header.insertAdjacentHTML('afterend', GALERIA);
};
export default loadGaleria;
