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
  questionCount: number;
  scoreCount: number;
}

export enum Types {
  AddScore = "incrementScore",
  AddQuestion = "incrementQuestion",
  reset = "resetNumbers",
}

type QuestionPayload = {
  [Types.AddScore]: undefined;
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
        scoreCount: (state.scoreCount += 1),
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
