import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        popularMovies: null,
        addTrending: null
    },
    reducers:{
        addNowPlayingMovies: (state, action)=>{
            state.nowPlayingMovies =action.payload
        },
        addPopularMovies: (state, action)=>{
            state.popularMovies =action.payload
        },
        addTrending: (state, action)=>{
            state.trending =action.payload
        },
        
        addUpcoming: (state, action)=>{
            state.upcoming=action.payload
        },
        addTrailerVideo: (state, action) => {
            console.log("Reducer received trailer video:", action.payload);
            state.trailerVideo = action.payload;
          },
    }
})

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies,addTrending, addUpcoming } = movieSlice.actions;
export default movieSlice.reducer;