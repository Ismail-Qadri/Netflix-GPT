import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryCOntainer from "./SecondaryCOntainer";


const Browse = () => {

 useNowPlayingMovies();

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