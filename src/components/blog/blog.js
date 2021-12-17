import './blog.css';
import BLOG from './blog.html';

const loadBlog = () => {
  const header = document.querySelector('.header');
  header.insertAdjacentHTML('afterend', BLOG);
};
export default loadBlog;
