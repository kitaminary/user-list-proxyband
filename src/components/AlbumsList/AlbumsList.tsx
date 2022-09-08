import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
// eslint-disable-next-line import/extensions, import/no-unresolved
import { AlboumType } from '../../react-app-env';
import './AlbumsList.scss';

import { getActiveModal, getUserAlboums } from '../../store/selectors';
import { setActiveModal } from '../../store/actions';

const AlbumsList: React.FC = () => {
  const albums = useSelector(getUserAlboums);
  const dispatch = useDispatch();
  const isActive = useSelector(getActiveModal);

  return (
    <div
      className={classNames('albums ', {
        'albums--active': isActive === false,
      })}
    >
      <div className="albums__box">
        <h2 className="title is-3 m-0">Albums</h2>
        <b>
          {`User ID: ${
            albums.find((album) => album.userId)?.userId
            || 'Cant find user by ID'
          }`}
        </b>
        <button
          className="button is-small is-danger is-rounded"
          type="button"
          onClick={() => dispatch(setActiveModal(false))}
        >
          Close
        </button>
      </div>
      <ul>
        {albums.map((album: AlboumType) => (
          <li key={album.id}>
            <b>{`Album ID ${album.id}: `}</b>
            {album.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumsList;
