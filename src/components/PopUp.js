import React, { useContext } from "react";
import "./PopUp.css";
import { BsPlayFill, BsPlus } from "react-icons/bs";
import { Context } from "./UserList";

export default function App({ movie, toggleShow, basicModal, setBasicModal }) {
  const { myList, setMyList } = useContext(Context);

  const handleClick = (movie) => {
    setMyList([...myList, movie]);
    console.log(myList);
  };

  // return (
  //   <>
  //     <div
  //       className="pop-up left"
  //       style={{ display: basicModal ? "block" : "none", background: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`, backgroundSize: "cover"}}
  //     >
  //       <div>
  //         <div>
  //           <header className="pop-header">
  //             <h2>{movie.original_title}</h2>
  //           </header>
  //           <div>
  //             <p className="vote">
  //               {`Rating ${movie.vote_average}% `}
  //               <span className="info">{`Release Date ${movie.release_date} `}</span>
  //               <span className="info">{`language: ${movie.original_language}`}</span>
  //             </p>
  //           </div>
  //           <main className="overview">
  //             <p>{movie.overview}</p>
  //           </main>
  //           <footer>
  //             <div className="flex gap-4 flex-wrap ml-[3rem]">
  //                           <button className="bg-red-600 rounded-lg shadow-slate-100 w-[8rem] p-2 text-white flex items-center justify-center "><BsPlayFill className="text-2xl"/>Play</button>
  //                           <button className="bg-white bg-opacity-50 rounded-lg w-[8rem] p-2 hover:bg-gray-800 flex items-center justify-center" onClick={()=>handleClick(movie)} ><BsPlus className="text-2xl"

  //                           />My List</button>
  //               </div>
  //           </footer>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );

  return (
    <div className="content">
      <div className="background">
        <div
          className="pop-up left"
          style={{
            display: basicModal ? "block" : "none",
            background: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
            backgroundSize: "cover",
          }}
        >
          <div className="content-container">
            <h1 className="pop-header">{movie.original_title}</h1>
            <p className="vote">
              {`Rating ${movie.vote_average}% `}
              <span className="info">
                {`Release Date ${movie.release_date}`}
              </span>
              <span className="info text">{`Language: ${movie.original_language.toUpperCase()}`}</span>
            </p>
            <main className="overview">
              <p>{movie.overview}</p>
            </main>
            <div className="flex gap-4 flex-wrap ml-[3rem]">
              <button className="bg-red-600 rounded-lg shadow-slate-100 w-[8rem] p-2 text-white flex items-center justify-center ">
                <BsPlayFill className="text-2xl" />
                Play
              </button>
              <button
                className="bg-white bg-opacity-50 rounded-lg w-[8rem] p-2 hover:bg-gray-800 flex items-center justify-center"
                onClick={() => handleClick(movie)}
              >
                <BsPlus className="text-2xl" />
                My List
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
