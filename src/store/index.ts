/* eslint-disable import/extensions */
import { configureStore, createReducer } from '@reduxjs/toolkit';
import {
  SetM,
} from './actions';
// eslint-disable-next-line import/no-unresolved
import { State } from '../react-app-env';

const initialState: State = {
  M: [],
};

const reducer = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase(SetM, (state, action) => {
        state.M = action.payload;
      });
  },
);

export const store = configureStore({ reducer });
