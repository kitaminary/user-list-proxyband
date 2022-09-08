// eslint-disable-next-line import/extensions, import/no-unresolved
import { UserType } from '../react-app-env';

const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

const getUsers = async (): Promise<UserType[]> => {
  const users = await fetch(BASE_URL);

  return users.json();
};

export default getUsers;
