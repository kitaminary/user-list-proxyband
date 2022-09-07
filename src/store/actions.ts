import { createAction } from '@reduxjs/toolkit';
import { ActionTypes } from './ActionTypes';

export const SetM = createAction<[]>(ActionTypes.SET_M);
