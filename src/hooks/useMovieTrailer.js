import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice"
import { useEffect } from "react";

const useMovieTrailer =(movieId)=>{
    const dispatch = useDispatch();     
    ///fetch movie trailer

  const getMovieVideos = async () => {
    const data = await fetch(
        'https://api.themoviedb.org/3/movie/'+movieId +'/videos?language=en-US',
      API_OPTIONS
    );
    console.log("API Response:", data);
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[1] : json.results[0];
   
         dispatch(addTrailerVideo(trailer));    
    }  

  useEffect(() => {
    getMovieVideos();
  }, []);

}
export default useMovieTrailer;