import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import movieReducer from "../features/movie/movieSlice";
import userReducer from "../features/user/userSlice";
import userSlice from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer ,
    movie: movieReducer,
    user: userSlice,
  },
});
