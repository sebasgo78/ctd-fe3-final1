import React, { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducers/reducer";

const CharContext = createContext();

const initialState = {
  list: [],
  favs: [],
  theme: true,
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchDentists = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch({ type: "GET_DENTISTS", payload: response.data });
    } catch (error) {
      console.error("Error al obtener dentistas:", error);
    }
  };

  useEffect(() => {
    fetchDentists();
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  return (
    <CharContext.Provider value={{ state, dispatch }}>
      {children}
    </CharContext.Provider>
  );
};

const useCharContext = () => useContext(CharContext);

export { ContextProvider, useCharContext };
