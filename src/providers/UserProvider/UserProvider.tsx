import { createContext, Dispatch, useReducer } from "react";
import reducer, { QuestionAction } from "./reducer";

interface UserProviderProps {
  children: React.ReactNode;
}

type InitialStateType = {
  answer: string;
  questionCount: number;
  scoreCount: number;
};

const initialState = {
  answer: "",
  questionCount: 0,
  scoreCount: 0,
};

export const UserContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<QuestionAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

function UserProvider({ children }: UserProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
