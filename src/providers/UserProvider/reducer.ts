interface State {
  name: string;
  questionCount: number;
  scoreCount: number;
}

interface Action {
  type: string;
  payload: string;
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "setName": {
      return {
        ...state,
        name: action.payload,
      };
    }
    case "incrementQuestion": {
      return {
        ...state,
        questionCount: state.questionCount + 1,
      };
    }
    case "incrementScore": {
      return {
        ...state,
        scoreCount: state.scoreCount + 1,
      };
    }
    default:
      return state;
  }
};

export default reducer;
