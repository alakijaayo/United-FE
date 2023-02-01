import { createContext, Dispatch, useReducer } from "react";
import Question from "../../models/Question";
import reducer, { QuestionAction } from "./reducer";

interface UserProviderProps {
  children: React.ReactNode;
}

type InitialStateType = {
  username: string;
  questionCount: number;
  scoreCount: number;
  question: Question;
};

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
