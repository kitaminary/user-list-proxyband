// eslint-disable-next-line import/extensions, import/no-unresolved
import { PostType } from '../react-app-env';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts?userId=';

const getPosts = async (id: number): Promise<PostType[]> => {
  const posts = await fetch(`${BASE_URL}${id}`);

  return posts.json();
};

export default getPosts;
