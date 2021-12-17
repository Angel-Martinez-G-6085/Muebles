import loadBlog from '../components/blog/blog';
import loadContacto from '../components/contacto/contacto';
import loadGaleria from '../components/galeria/galeria';
import { loadInicio } from '../components/inicio/inicio';
import loadNosotros from '../components/nosotros/nosotros';
import loadTienda from '../components/tienda/tienda';
import loadTemplates from '../utils/loadTemplates';

const PATHS = [
  {
    path: '/',
    action: () => {
      loadTemplates();
      loadInicio();
    },
  },
  {
    path: '#/nosotros',
    action: () => {
      loadTemplates();
      loadNosotros();
    },
  },
  {
    path: '#/tienda',
    action: () => {
      loadTemplates();
      loadTienda();
    },
  },
  {
    path: '#/blog',
    action: () => {
      loadTemplates();
      loadBlog();
    },
  },
  {
    path: '#/galeria',
    action: () => {
      loadTemplates();
      loadGaleria();
    },
  },
  {
    path: '#/contacto',
    action: () => {
      loadTemplates();
      loadContacto();
    },
  },
  {
    path: '404',
    action: () => {
      console.log('pagina 404');
    },
  },
];
export default PATHS;
