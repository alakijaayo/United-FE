import { createContext, useMemo, useState } from "react";

interface UserProviderProps {
  children: React.ReactNode;
}

type userNameType = {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
};

export const UserContext = createContext<userNameType>({
  userName: "",
  setUserName: () => {},
});

function UserProvider({ children }: UserProviderProps) {
  const [userName, setUserName] = useState("");
  const value = useMemo(() => ({ userName, setUserName }), [userName]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserProvider;
