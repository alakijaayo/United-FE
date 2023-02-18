type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

interface State {
  answer: string;
  route: string;
  questionCount: number;
  scoreCount: number;
}

type QuestionPayload = {
  incrementScore: {
    score: string;
  };
  correctAnswer: {
    answer: string;
  };
  incrementQuestion: {
    questionCount: string;
  };
  resetNumbers: {
    score: string;
    questionCount: string;
  };
  setLink: {
    link: string;
  };
};

export type QuestionAction =
  ActionMap<QuestionPayload>[keyof ActionMap<QuestionPayload>];

const reducer = (state: State, action: QuestionAction): State => {
  switch (action.type) {
    case "incrementQuestion":
      return {
        ...state,
        questionCount: parseInt(action.payload.questionCount),
      };
    case "incrementScore":
      return {
        ...state,
        scoreCount: parseInt(action.payload.score),
      };
    case "correctAnswer":
      return {
        ...state,
        answer: action.payload.answer,
      };
    case "resetNumbers":
      return {
        ...state,
        questionCount: parseInt(action.payload.questionCount),
        scoreCount: parseInt(action.payload.score),
      };
    case "setLink":
      return {
        ...state,
        route: action.payload.link,
      };
    default:
      return state;
  }
};

export default reducer;
