import React, { useState, createContext, useEffect } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [users, setUsers] = useState([
    {
      username: "Cem",
      password: "1234",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",
    },
    {
      username: "Kirk",
      password: "12345",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",
    },
    {
      username: "Antonio",
      password: "1234567",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",
    },
  ]);

  const [signedIn, setSignedIn] = useState([{}]);

  const [movie, setMovie] = useState();
  const [myList, setMyList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getData() {
      if (
        !"https://api.themoviedb.org/3/movie/now_playing?api_key=638b3df8bab99a759f1d977b58d6d261&language=en-US&page=1"
      )
        return null;
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?api_key=638b3df8bab99a759f1d977b58d6d261&language=en-US&page=1"
        );
        const data = await response.json();

        setMovie(data);
      } catch (error) {
        console.log(alert("Error in getmovie"), error.message);
        return null;
      }
    }
    getData();
  }, []);

  return (
    <Context.Provider
      value={{
        users,
        setUsers,
        signedIn,
        setSignedIn,
        movie,
        setMovie,
        myList,
        setMyList,
        search,
        setSearch,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
