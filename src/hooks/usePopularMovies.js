import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";


export const usePopularMovies=()=>{

     // fetch data fro, TMDB API and update store
  const dispatch=useDispatch();

  const getPopularMovies = async () => {
    try {
      const data = await fetch(
        'https://api.themoviedb.org/3/movie/popular?page=1'
      ,     API_OPTIONS);
      const json = await data.json();
  
      dispatch(addPopularMovies(json.results))
    } catch (error) {
      console.error("Failed to fetch now playing movies:", error);
    }
  }
  // Correctly use the useEffect hook
  useEffect(() => {
    getPopularMovies();
  }, []); 
}

export default usePopularMovies;