import React, {useContext} from "react";
import "./PopUp.css";
import { BsPlayFill, BsPlus} from "react-icons/bs";
import Context from "./UserList" 


export default function App({ movie, toggleShow, basicModal, setBasicModal }) {

  // const {myList, setMyList} = useContext(Context);

  // const handleClick = (movie) => {
  //   setMyList([...myList, movie])
  //   console.log(myList)
  // }

  return (
    <>
      <div
        className="pop-up"
        style={{ display: basicModal ? "block" : "none" }}
      >
        <div>
          <div>
            <header className="pop-header">
              <h2>{movie.original_title}</h2>
            </header>
            <div>
              <p className="vote">
                {`Rating ${movie.vote_average}% `}
                <span className="info">{`Release Date ${movie.release_date} `}</span>
                <span className="info">{`language: ${movie.original_language}`}</span>
              </p>
            </div>
            <main className="overview">
              <p>{movie.overview}</p>
            </main>
            <footer>
              <div className="flex gap-4 flex-wrap ml-[3rem]">
                            <button className="bg-red-600 rounded-lg shadow-slate-100 w-[8rem] p-2 text-white flex items-center justify-center "><BsPlayFill className="text-2xl"/>Play</button>
                            <button className="bg-white bg-opacity-50 rounded-lg w-[8rem] p-2 hover:bg-gray-800 flex items-center justify-center"><BsPlus className="text-2xl"
                            // onClick={() => handleClick(movie)} 
                            />My List</button>
                </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
