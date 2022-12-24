import { createContext, useReducer } from "react";
import reducer from "./reducer";

interface UserProviderProps {
  children: React.ReactNode;
}

const initialState = {
  name: "",
  questionCount: 0,
  scoreCount: 0,
};

export const UserContext = createContext<any>({});

function UserProvider({ children }: UserProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
