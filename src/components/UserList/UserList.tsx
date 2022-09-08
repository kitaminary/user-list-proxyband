import React from 'react';
import { useSelector } from 'react-redux';
// eslint-disable-next-line import/extensions, import/no-unresolved
import { UserType } from '../../react-app-env';
import './UserList.scss';
import { getUsersFromServer } from '../../store/selectors';
import Albums from '../AlbumsList/AlbumsList';
import User from '../User/User';

const UserList: React.FC = () => {
  const users = useSelector(getUsersFromServer);

  return (
    <>
      <Albums />
      <ul className="is-flex is-flex-direction-row is-flex-wrap-wrap is-justify-content-center is-align-content-center p-6">
        {users.map((user: UserType) => {
          return (
            <li key={user.id} className="user m-3 p-3">
              <User user={user} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UserList;
