import React, { useEffect } from "react";
import usePeople from "./hooks/usePeople";
import Main from "./views/Main";
import Loading from "./components/compound/Loading"

const App = () => {
  const { people, isLoading, getPeople } = usePeople();

  useEffect(() => {
    if (!Boolean(people)) {
      getPeople().then(() => {
        console.log("Get people");
      });
    }
  }, [people, getPeople]);

  return (
    <>
      <Loading isLoading={isLoading} />
      {Boolean(people) && <Main />}
    </>
  );
};

export default App;
