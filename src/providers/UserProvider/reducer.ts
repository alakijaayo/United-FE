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
  questionCount: number;
  scoreCount: number;
}

export enum Types {
  AddScore = "incrementScore",
  AddQuestion = "incrementQuestion",
  CorrectAnswer = "correctAnswer",
  reset = "resetNumbers",
}

type QuestionPayload = {
  [Types.AddScore]: {
    score: number;
  };
  [Types.CorrectAnswer]: {
    answer: string;
  };
  [Types.AddQuestion]: undefined;
  [Types.reset]: undefined;
};

export type QuestionAction =
  ActionMap<QuestionPayload>[keyof ActionMap<QuestionPayload>];

const reducer = (state: State, action: QuestionAction): State => {
  switch (action.type) {
    case Types.AddQuestion:
      return {
        ...state,
        questionCount: (state.questionCount += 1),
      };
    case Types.AddScore:
      return {
        ...state,
        scoreCount: (state.scoreCount = action.payload.score),
      };
    case Types.CorrectAnswer:
      return {
        ...state,
        answer: action.payload.answer,
      };
    case Types.reset:
      return {
        ...state,
        questionCount: 0,
        scoreCount: 0,
      };
    default:
      return state;
  }
};

export default reducer;
