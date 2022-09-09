import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import getUsers from './api/Users';
import PostList from './components/PotstList/PostsList';
import UserList from './components/UserList/UserList';
// eslint-disable-next-line import/extensions, import/no-unresolved
import { UserType } from './react-app-env';
import { setUsersFromServer } from './store/actions';

export const App: React.FC = () => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState<UserType[]>([]);

  const getDataUsers = async () => {
    const usersFromServer: UserType[] = await getUsers();

    setUsers(usersFromServer);
    dispatch(setUsersFromServer(usersFromServer));
  };

  useEffect(() => {
    getDataUsers();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<UserList />} />
      {users.map((user) => (
        <Route
          key={user.id}
          path={`/posts=${user.id}`}
          element={<PostList />}
        />
      ))}
    </Routes>
  );
};
