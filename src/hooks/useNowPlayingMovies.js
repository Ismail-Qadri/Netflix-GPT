import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import def from "ajv/dist/vocabularies/discriminator";


export const useNowPlayingMovies=()=>{

     // fetch data fro, TMDB API and update store
  const dispatch=useDispatch();

  const getNowPlayingMovies = async () => {
    try {
      const data = await fetch(
        'https://api.themoviedb.org/3/movie/now_playing?page=1'
      ,     API_OPTIONS);
      const json = await data.json();
  
      dispatch(addNowPlayingMovies(json.results))
    } catch (error) {
      console.error("Failed to fetch now playing movies:", error);
    }
  }
  // Correctly use the useEffect hook
  useEffect(() => {
    getNowPlayingMovies();
  }, []); 
}

export default useNowPlayingMovies;