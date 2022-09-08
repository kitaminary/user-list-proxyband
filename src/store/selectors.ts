/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { State } from '../react-app-env';

export const getUsersFromServer = (initialState: State) => initialState.usersFromServer;
export const getUserAlboums = (initialState: State) => initialState.userAlboums;
export const getActiveModal = (initialState: State) => initialState.activeModal;
export const getPostsFromServer = (initialState: State) => initialState.postsFromServer;
