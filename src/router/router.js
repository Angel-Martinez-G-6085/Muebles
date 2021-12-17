import { matchPath } from '../utils/matchPath';

class Router {
  // Constructor
  constructor(paths) {
    this.paths = paths;
  }
  // iniciar el Router y cargar la pagina de inicio cuando la ruta / no tiene #
  initRouter() {
    let ActualPath = window.location.hash;
    ActualPath ? '' : (ActualPath = '/');
    return ActualPath;
  }
  // Imprime el componente si no existe imprime la pagina 404
  RenderComponent() {
    let reqPath = this.initRouter();
    let routes = this.paths;
    matchPath(reqPath, routes);
  }
}
export default Router;
