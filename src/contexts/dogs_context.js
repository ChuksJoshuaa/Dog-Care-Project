import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/dogs_reducer";
import axios from "axios";

import {
  GET_DOG_BEGIN,
  GET_DOG_SUCCESS,
  GET_DOG_ERROR,
  HANDLE_SEARCH,
} from "../constant/actionTypes";

const initialState = {
  dogs_loading: false,
  dogs_error: false,
  dogs: [],
  searchTerm: "G",
};

const DoggoContext = React.createContext();

export const DoggoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const open = () => {
    console.log("yes");
  };

  const getDogs = () => {
    dispatch({ type: GET_DOG_BEGIN });

    const options = {
      method: "GET",
      url: `https://${process.env.REACT_APP_RAPID_HOST}/dog_breeds/breed/${state.searchTerm}`,
      headers: {
        "x-rapidapi-host": `${process.env.REACT_APP_RAPID_HOST}`,
        "x-rapidapi-key": `${process.env.REACT_APP_RAPID_KEY}`,
      },
    };
    axios
      .request(options)
      .then(function (response) {
        const dogs = response.data;
        dispatch({ type: GET_DOG_SUCCESS, payload: dogs });
      })
      .catch(function (error) {
        dispatch({ type: GET_DOG_ERROR });
      });
  };

  const setSearchTerm = (searchTerm) => {
    dispatch({ type: HANDLE_SEARCH, payload: searchTerm });
  };

  useEffect(() => {
    getDogs();
  }, [state.searchTerm]);

  return (
    <DoggoContext.Provider value={{ ...state, open, setSearchTerm }}>
      {children}
    </DoggoContext.Provider>
  );
};

export const useDoggoContext = () => {
  return useContext(DoggoContext);
};
