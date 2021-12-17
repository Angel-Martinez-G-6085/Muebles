export const matchPath = (reqPath, paths) => {
  const found = paths.find(({ path }) => path == reqPath);
  if (found != undefined) {
    return found.action();
  } else {
    const ultimo = paths.length - 1;
    const { action } = paths[ultimo];
    action();
  }
};
