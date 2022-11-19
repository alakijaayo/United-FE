import React, { createContext, useMemo, useState } from "react";
import Router from "./Routes";

type userNameType = {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
};

export const UserContext = createContext<userNameType>({
  userName: "",
  setUserName: () => {},
});

function App() {
  const [userName, setUserName] = useState("");
  const value = useMemo(() => ({ userName, setUserName }), [userName]);
  return (
    <>
      <UserContext.Provider value={value}>
        <Router />
      </UserContext.Provider>
    </>
  );
}

export default App;
