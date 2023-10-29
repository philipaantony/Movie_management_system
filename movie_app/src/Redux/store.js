// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import movieSlice from './movie/movieSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        movie: movieSlice,
    }
});

export default store;
