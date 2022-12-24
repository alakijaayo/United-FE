import { createContext, useContext, useReducer } from "react";

type Action = { type: "increment" };
type Dispatch = (action: Action) => void;
type State = { count: number };
interface QuestionProviderProps {
  children: React.ReactNode;
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "increment": {
      return { count: state.count + 1 };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const QuestionContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function QuestionProvider({ children }: QuestionProviderProps) {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <QuestionContext.Provider value={{ state, dispatch }}>
      {children}
    </QuestionContext.Provider>
  );
}

function useCount() {
  const context = useContext(QuestionContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
}

export { QuestionProvider, useCount };
