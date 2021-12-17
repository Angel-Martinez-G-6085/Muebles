export const matchPath = (reqPath, paths) => {
  // Verifica si la ruta solicitada existe y la imprime
  const found = paths.find(({ path }) => path == reqPath);
  if (found != undefined) {
    return found.action();

    // Si la ruta solicitada no existe imprime la pagina 404
  } else {
    const ultimo = paths.length - 1;
    const { action } = paths[ultimo];
    action();
  }
};
