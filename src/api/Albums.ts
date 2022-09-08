// eslint-disable-next-line import/extensions, import/no-unresolved
import { AlboumType } from '../react-app-env';

const BASE_URL = 'https://jsonplaceholder.typicode.com/albums?userId=';

const getAlbums = async (id: number): Promise<AlboumType[]> => {
  const albums = await fetch(`${BASE_URL}${id}`);

  return albums.json();
};

export default getAlbums;
