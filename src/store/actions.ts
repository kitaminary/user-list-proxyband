import { createAction } from '@reduxjs/toolkit';
import { ActionTypes } from './ActionTypes';
// eslint-disable-next-line import/extensions, import/no-unresolved
import { AlboumType, PostType, UserType } from '../react-app-env';

export const setUsersFromServer = createAction<UserType[]>(
  ActionTypes.SET_UsersFromServer,
);
export const setUserAlbums = createAction<AlboumType[]>(
  ActionTypes.SET_UserAlboums,
);
export const setActiveModal = createAction<boolean>(
  ActionTypes.SET_ActiveModal,
);

export const setPostsFromServer = createAction<PostType[]>(
  ActionTypes.SET_PostsFromServer,
);

export const setLoader = createAction<boolean>(ActionTypes.SET_loader);
