import React, { useState } from "react";
import useGetMovie from "./components/useGetMovie";

import Category from "./components/categories/Category";
import Category1 from "./components/categories/Category1";
import Category2 from "./components/categories/Category2";
import Category3 from "./components/categories/Category3";
import Category4 from "./components/categories/Category4";
import Slider1 from "./components/carousels/Slider1";
import Slider2 from "./components/carousels/Slider2";
import MainContent from "./components/Header/MainContent";
import Navbar from "./components/Header/Navbar";
import SearchPage from "./components/Header/SearchPage";

function App() {
  const movies = useGetMovie(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=638b3df8bab99a759f1d977b58d6d261&language=en-US&page=1"
  );
  const Categories = [
    { name0: "Netflix Originals" },
    { name1: "Trending" },
    { name2: "Top Rated" },
    { name3: "Action Movies" },
    { name4: "Comedy" },
  ];

  return (
    <div>
      {movies && movies?.results.length > 0 && (
        <Navbar movies={movies?.results} />
      )}
      <MainContent className="relative" />
      <div className="absolute gradient w-[100vw] h-[8rem] bottom-0"></div>
      <div className="main relative bg-black">
        <Category title={Categories} />

        {movies && movies?.results.length > 0 && (
          <Slider1 movies={movies.results} />
        )}

        <Category1 title={Categories} />

        {movies && movies?.results.length > 0 && (
          <Slider2 movies={movies.results} />
        )}
        <Category2 title={Categories} />

        {movies && movies?.results.length > 0 && (
          <Slider2 movies={movies.results} />
        )}
        <Category3 title={Categories} />

        {movies && movies?.results.length > 0 && (
          <Slider2 movies={movies.results} />
        )}
        <Category4 title={Categories} />

        {movies && movies?.results.length > 0 && (
          <Slider2 movies={movies.results} />
        )}
      </div>
    </div>
  );
}

export default App;
