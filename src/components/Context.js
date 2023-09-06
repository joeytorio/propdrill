import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [parentValue, setParentValue] = useState('');

  return (
    <AppContext.Provider value={{ parentValue, setParentValue }}>
      {children}
    </AppContext.Provider>
  );
};
