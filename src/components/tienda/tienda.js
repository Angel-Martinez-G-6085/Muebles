import './tienda.css';
import TIENDA from './tienda.html';

const loadTienda = () => {
  const header = document.querySelector('.header');
  header.insertAdjacentHTML('afterend', TIENDA);
};
export default loadTienda;
