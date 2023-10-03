import React, { createContext, useState, useContext } from "react";

const OrderContext = createContext();

export const useOrder = () => {
  return useContext(OrderContext);
};

export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState([]);

  const addToOrder = (item) => {
    setOrder((prevOrder) => [...prevOrder, item]);
    // Any additional logic or API calls for adding to order
  };

  const removeFromOrder = (itemId) => {
    setOrder((prevOrder) => prevOrder.filter((item) => item.id !== itemId));
    // Any additional logic or API calls for removing from order
  };

  const clearOrder = () => {
    setOrder([]);
    // Any additional logic or API calls for clearing the order
  };

  const contextValue = {
    order,
    addToOrder,
    removeFromOrder,
    clearOrder,
  };

  return (
    <OrderContext.Provider value={contextValue}>
      {children}
    </OrderContext.Provider>
  );
};
