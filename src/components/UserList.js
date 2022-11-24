import React, { useState, createContext} from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [users, setUsers] = useState([
    {
        username: "Cem",
        password: "1234",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
    },
    {
        username: "Kirk",
        password: "12345",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
    },
    {
        username: "Antonio",
        password: "1234567",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
    }
  ]);

  const [signedIn, setSignedIn] = useState([{}]);


  return (
    <Context.Provider value={{users, setUsers, signedIn, setSignedIn}}>

      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
