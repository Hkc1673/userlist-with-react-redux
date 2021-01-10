import { combineReducers } from '@reduxjs/toolkit';
import homeReducer from './home/homeSlice';

const rootReducer = combineReducers({
  home: homeReducer,
});

export default rootReducer;