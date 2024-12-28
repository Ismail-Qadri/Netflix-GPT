import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrending } from "../utils/movieSlice";
import { useEffect } from "react";


export const useTrending=()=>{

     // fetch data fro, TMDB API and update store
  const dispatch=useDispatch();

  const getTrending = async () => {
    try {
      const data = await fetch(
        'https://api.themoviedb.org/3/movie/top_rated?page=1'
      ,     API_OPTIONS);
      const json = await data.json();
  
      dispatch(addTrending(json.results))
    } catch (error) {
      console.error("Failed to fetch now playing movies:", error);
    }
  }
  // Correctly use the useEffect hook
  useEffect(() => {
    getTrending();
  }, []); 
}

export default useTrending;