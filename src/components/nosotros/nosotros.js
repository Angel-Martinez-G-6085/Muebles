import './nosotros.css';
import NOSOTROS from './nosotros.html';

const loadNosotros = () => {
  const header = document.querySelector('.header');
  header.insertAdjacentHTML('afterend', NOSOTROS);
};
export default loadNosotros;
