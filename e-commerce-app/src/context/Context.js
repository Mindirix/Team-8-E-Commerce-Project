import React, { useReducer, useContext, useEffect } from "react";
import CartItems from "../data";
import reducer from "../reducer/Reducer";

const AppContext = React.createContext();

const initialState = {
  cart: CartItems,
  amount: 0,
  total: 0,
};

export const ProductContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  useEffect(() => {
    dispatch({ type: "TOTAL_AMOUNT" });
  }, [state.cart]);

  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };

  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  return (
    <AppContext.Provider value={{ ...state, remove, increase, decrease }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
