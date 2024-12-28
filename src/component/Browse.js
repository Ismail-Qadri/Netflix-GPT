import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryCOntainer from "./SecondaryCOntainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrending from "../hooks/useTrending";
import useUpcoming from "../hooks/useUpcoming";

const Browse = () => {

 useNowPlayingMovies();
 usePopularMovies();
 useTrending();
 useUpcoming();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryCOntainer />
       
    </div>
  );
};

export default Browse;

{/*
    MainContainer
    - VideoBg
    - VideoTitle
    SecondaryCOntainer
    - MovieList * n
     - cards * n
  
  */}