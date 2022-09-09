/* eslint-disable import/extensions */
import { configureStore, createReducer } from '@reduxjs/toolkit';
import {
  setActiveModal,
  setLoader,
  setPostsFromServer,
  setUserAlbums,
  setUsersFromServer,
} from './actions';
// eslint-disable-next-line import/no-unresolved
import { State } from '../react-app-env';

const initialState: State = {
  usersFromServer: [],
  userAlboums: [],
  activeModal: false,
  postsFromServer: [],
  loader: true,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setUsersFromServer, (state, action) => {
    state.usersFromServer = action.payload;
  });
  builder.addCase(setUserAlbums, (state, action) => {
    state.userAlboums = action.payload;
  });
  builder.addCase(setActiveModal, (state, action) => {
    state.activeModal = action.payload;
  });
  builder.addCase(setPostsFromServer, (state, action) => {
    state.postsFromServer = action.payload;
  });
  builder.addCase(setLoader, (state, action) => {
    state.loader = action.payload;
  });
});

export const store = configureStore({ reducer });
