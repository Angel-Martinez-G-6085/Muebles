import './footer.css';
import FOOTER from './footer.html';

export const loadFooter = () => {
  const mainContainer = document.querySelector('.main-container');
  mainContainer.innerHTML = FOOTER;
};
