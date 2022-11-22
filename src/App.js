import React from "react";
import useGetMovie from "./components/useGetMovie";

import Category from "./components/categories/Category";
import Category1 from "./components/categories/Category1";
import Category2 from "./components/categories/Category2";
import Category3 from "./components/categories/Category3";
import Category4 from "./components/categories/Category4";
import Slider1 from "./components/carousels/Slider1";
import Slider2 from "./components/carousels/Slider2";
// import PopUp from "./components/PopUp";

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

  console.log(movies);
  return (
    <div className="main relative">
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

      {/* {movies && movies?.results.length > 0 && (
        <PopUp movies={movies.results} />
      )} */}
    </div>
  );
}

export default App;
