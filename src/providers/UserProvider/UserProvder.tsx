import { createContext, useReducer } from "react";
import reducer from "./reducer";

interface UserProviderProps {
  children: React.ReactNode;
}

const initialState = {
  username: "",
  questionCount: 0,
  scoreCount: 0,
  question: {
    number: null,
    question: "",
    option_a: "",
    option_b: "",
    option_c: "",
    option_d: "",
    correct: "",
  },
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
