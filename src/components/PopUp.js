import React from "react";
import "./PopUp.css";

export default function App({ movie, toggleShow, basicModal, setBasicModal }) {
  return (
    <>
      <div
        className="pop-up"
        style={{ display: basicModal ? "block" : "none" }}
      >
        <div>
          <div>
            <header>
              <h2>{movie.original_title}</h2>
            </header>
            <main>
              <p>{movie.overview}</p>
            </main>
            <footer></footer>
          </div>
        </div>
      </div>
    </>
  );
}
