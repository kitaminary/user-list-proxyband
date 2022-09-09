import React from 'react';
import { useSelector } from 'react-redux';
import './PostsList.scss';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/extensions, import/no-unresolved
import { PostType } from '../../react-app-env';
import { getLoader, getPostsFromServer } from '../../store/selectors';

const PostList: React.FC = () => {
  const posts = useSelector(getPostsFromServer);
  const loader = useSelector(getLoader);

  return (
    <>
      {loader === false ? (
        <ul>
          <Link to="/" className="button is-danger m-3">
            <img
              width={50}
              src="https://thypix.com/wp-content/uploads/2020/04/white-arrow-21-700x368.png"
              alt="arrow"
            />
            Back to Users
          </Link>
          {posts.map((post: PostType) => (
            <li key={post.id} className="m-3">
              <div>
                <h3 className="title is-4 m-1">{`Post №${post.id}: ${post.title}`}</h3>
                <p className="m-0">{post.body}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="button is-white is-loading loader">Loading...</div>
      )}
    </>
  );
};

export default PostList;
