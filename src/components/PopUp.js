import React from "react";
import "./PopUp.css";
import { BsPlayFill, BsPlusLg } from "react-icons/bs";

export default function App({ movie, toggleShow, basicModal, setBasicModal }) {
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
              <button className="play">
                <BsPlayFill className="play-icon" /> PLAY
              </button>
              <button className="wish">
                <BsPlusLg className="wish-icon" /> MY LIST
              </button>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
