// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userid: '',
        useremail: '',
        isLoggedIn: false,
    },
    reducers: {
        login: (state, action) => {
            state.userid = action.payload.userid;
            state.useremail = action.payload.useremail;
            state.isLoggedIn = true;
        },
        logout: (state, action) => {
            state.userid = action.payload.userid;
            state.useremail = action.payload.useremail;
            state.isLoggedIn = false;
        }
    }
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
