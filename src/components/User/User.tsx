import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import getAlbums from '../../api/Albums';
// eslint-disable-next-line import/extensions, import/no-unresolved
import { UserType } from '../../react-app-env';
import {
  setActiveModal,
  setPostsFromServer,
  setUserAlbums,
} from '../../store/actions';
import getPosts from '../../api/Posts';

interface Props {
  user: UserType;
}

const User: React.FC<Props> = ({ user }) => {
  const dispatch = useDispatch();

  const getUserAlbums = async (id: number) => {
    const albumsFromServer = await getAlbums(id);

    dispatch(setUserAlbums(albumsFromServer));
  };

  const getUserPosts = async (id: number) => {
    const postsFromServer = await getPosts(id);

    dispatch(setPostsFromServer(postsFromServer));
  };

  return (
    <>
      <ul>
        <h2 className="title is-4 m-0">{user.username}</h2>
        <li>
          <p>
            <i className="subtitle is-6">{`Real name: ${user.name}`}</i>
          </p>
          <p>
            <i className="is-size-7 m-6">
              <b>Company: </b>
              {`"${user.company.name}"`}
            </i>
          </p>
        </li>
        <li>
          <b>Email: </b>
          <a
            className="is-size-7"
            href={`mailto:${user.email}`}
            rel="noreferrer"
          >
            {user.email}
          </a>
        </li>
        <li>
          <b>Phone: </b>
          <a className="is-size-7" href={`tel:+${user.phone}`} rel="noreferrer">
            {user.phone}
          </a>
        </li>
        <li>
          <b>Website: </b>
          <a
            className="is-size-7"
            href={`http://${user.website}`}
            rel="noreferrer"
            target="_blank"
          >
            {`http://${user.website}`}
          </a>
        </li>
        <li>
          <Link
            to={`/posts=${user.id}`}
            className="button is-info is-outlined m-2"
            onClick={() => getUserPosts(user.id)}
            type="button"
          >
            Show Post
          </Link>
          <button
            className="button is-info is-outlined m-2"
            type="button"
            onClick={() => {
              getUserAlbums(user.id);
              dispatch(setActiveModal(true));
            }}
          >
            Show Albums
          </button>
        </li>
      </ul>
    </>
  );
};

export default User;
