import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie", // Set the slice name to "movie"
    initialState: {
        movie_id: "",
        poster_url: "",
        title: "",
        genre: "",
        duration: "",
        release_date: "",
        director: '',
        language: '',
        description: '',
        production: '',
        cast: '',
        trailer_url: '',
        StreamingType: '',
    },
    reducers: {
        setMovie: (state, action) => {
            state.movie_id = action.payload.movie_id;
            state.poster_url = action.payload.poster_url;
            state.title = action.payload.title;
            state.genre = action.payload.genre;
            state.duration = action.payload.duration;
            state.release_date = action.payload.release_date;
            state.director = action.payload.director;
            state.language = action.payload.language;
            state.description = action.payload.description;
            state.production = action.payload.production;
            state.cast = action.payload.cast;
            state.trailer_url = action.payload.trailer_url;
            state.StreamingType = action.payload.StreamingType;
        },
    },
});

export const { setMovie } = movieSlice.actions;
export default movieSlice.reducer;
