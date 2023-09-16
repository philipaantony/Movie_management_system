// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        useremail: '',
        isLoggedIn: false,
    },
    reducers: {
        login: (state, action) => {
            state.useremail = action.payload.useremail;
            state.isLoggedIn = true;
        },
        logout: (state, action) => {
            state.useremail = action.payload.useremail;
            state.isLoggedIn = false;
        }
    }
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
