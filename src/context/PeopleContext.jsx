import React, { useState } from "react";

const Context = React.createContext({});

export const PeopleContextProvider = ({ children }) => {
  const [people, setPeople] = useState(null);

  return (
    <Context.Provider
      value={{
        people,
        setPeople,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
