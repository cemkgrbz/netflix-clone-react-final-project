import { createContext, useReducer, useState } from "react";
import React from "react";
import useGetMovie from "./useGetMovie";

export const Context = createContext();

export default function ContextProvider({ children }) {
  function reducer(state, action) {
    switch (action.type) {
      default:
        return;
    }
  }
  const [state, dispatch] = useReducer(reducer, {});
  const [carousel, setCarousel] = useState();
  return (
    <Context.Provider value={(state, dispatch, carousel, setCarousel)}>
      {children}
    </Context.Provider>
  );
}
