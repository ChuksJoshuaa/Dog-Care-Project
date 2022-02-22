import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/dogs_reducer";
import axios from "axios";

import {
  GET_DOG_BEGIN,
  GET_DOG_SUCCESS,
  GET_DOG_ERROR,
  HANDLE_SEARCH,
} from "../files";

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

  // url: "https://dog-breeds2.p.rapidapi.com/dog_breeds/breed/Aidi",

  const getDogs = () => {
    dispatch({ type: GET_DOG_BEGIN });

    const options = {
      method: "GET",
      url: `https://dog-breeds2.p.rapidapi.com/dog_breeds/breed/${state.searchTerm}`,
      headers: {
        "x-rapidapi-host": "dog-breeds2.p.rapidapi.com",
        "x-rapidapi-key": "ffb3cf767fmsh0481669230cd7afp1c729cjsn746ff923ed8e",
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
