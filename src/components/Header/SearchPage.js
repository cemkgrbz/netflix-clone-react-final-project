import React, { useContext } from "react";
//search function
import { Context } from "./../UserList";
import "./SearchPage.css";
import Navbar from "./Navbar";

import { BsPlayFill, BsPlus } from "react-icons/bs";
function SearchPage() {
  const { search, movie } = useContext(Context);

  //use  movie
  //const [movie, setMovie] = useState();

  //filter movie array

  const movieResults = movie.results.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );
  console.log(movieResults);

  return (
    <div>
      <Navbar />
      {movieResults.map((item, idx) => {
        return (
          <div className="backdrop">
            {/* <div key={idx} className="pop-up">
              <img
                className="search-image"
                src={`https://image.tmdb.org/t/p/original${item.backdrop_path} `}
                alt=""
              />
              <h2>{item.title}</h2>
              <p> Language: {item.original_language}</p>
              <p className="description">{item.overview}</p>
            </div> */}
            <>
              <div
                className="pop-up h-[45rem]"
                style={{
                  background: `url(https://image.tmdb.org/t/p/original${item.backdrop_path} )`,
                  backgroundSize: "cover",
                }}
              >
                <div>
                  <div>
                    <header className="pop-header">
                      <h2>{item.original_title}</h2>
                    </header>
                    <div>
                      <p className="vote">
                        {`Rating ${item.vote_average}% `}
                        <span className="info">{`Release Date ${movie.release_date} `}</span>
                        <span className="info">{`language: ${movie.original_language}`}</span>
                      </p>
                    </div>
                    <main className="overview">
                      <p>{item.overview}</p>
                    </main>
                    <footer>
                      <div className="flex gap-4 flex-wrap ml-[3rem]">
                        <button className="bg-red-600 rounded-lg shadow-slate-100 w-[8rem] p-2 text-white flex items-center justify-center ">
                          <BsPlayFill className="text-2xl" />
                          Play
                        </button>
                        <button className="bg-white bg-opacity-50 rounded-lg w-[8rem] p-2 hover:bg-gray-800 flex items-center justify-center">
                          <BsPlus
                            className="text-2xl"
                            // onClick={() => handleClick(movie)}
                          />
                          My List
                        </button>
                      </div>
                    </footer>
                  </div>
                </div>
              </div>
            </>
          </div>
        );
      })}
    </div>
  );
}

export default SearchPage;
