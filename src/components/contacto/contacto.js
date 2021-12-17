import './contacto.css';
import CONTACTO from './contacto.html';

const loadContacto = () => {
  const header = document.querySelector('.header');
  header.insertAdjacentHTML('afterend', CONTACTO);
};
export default loadContacto;
