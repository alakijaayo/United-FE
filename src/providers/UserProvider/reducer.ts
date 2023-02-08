import Question from "../../models/Question";

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
  username: string;
  questionCount: number;
  scoreCount: number;
  question: Question;
}

export enum Types {
  AddScore = "incrementScore",
  AddQuestion = "incrementQuestion",
  setName = "setName",
  setQuestion = "setQuestion",
  reset = "resetNumbers",
  resetQuestion = "resetQuestion",
}

type QuestionPayload = {
  [Types.AddScore]: undefined;
  [Types.AddQuestion]: undefined;
  [Types.setName]: {
    username: string;
  };
  [Types.setQuestion]: {
    number: number | null;
    question: string;
    option_a: string;
    option_b: string;
    option_c: string;
    option_d: string;
    correct: string;
  };
  [Types.reset]: undefined;
  [Types.resetQuestion]: undefined;
};

export type QuestionAction =
  ActionMap<QuestionPayload>[keyof ActionMap<QuestionPayload>];

const reducer = (state: State, action: QuestionAction): State => {
  switch (action.type) {
    case Types.AddQuestion:
      return {
        ...state,
        questionCount: state.questionCount + 1,
      };
    case Types.AddScore:
      return {
        ...state,
        scoreCount: state.scoreCount + 1,
      };
    case Types.setName:
      return {
        ...state,
        username: action.payload.username,
      };
    case Types.reset:
      return {
        ...state,
        questionCount: 0,
        scoreCount: 0,
      };
    case Types.resetQuestion:
      return {
        ...state,
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
    case Types.setQuestion:
      return {
        ...state,
        question: {
          number: action.payload.number,
          question: action.payload.question,
          option_a: action.payload.option_a,
          option_b: action.payload.option_b,
          option_c: action.payload.option_c,
          option_d: action.payload.option_d,
          correct: action.payload.correct,
        },
      };
    default:
      return state;
  }
};

export default reducer;
