/* eslint-disable no-restricted-syntax */
const timestamp = '<timestamp>';
const apikey = '<apikey>';
const hash = '<hash>';

const buildMarvelApiRoute = (route, queries) => {
  let url = `${route}?ts=${timestamp}&apikey=${apikey}&hash=${hash}`;

  if (queries) {
    for (const [key, value] of Object.entries(queries)) {
      url += `&${key}=${value}`;
    }
  }

  return url;
};

export default buildMarvelApiRoute;
