import { create } from 'zustand';

export interface Answer {
  id: string;
  user_id: string;
  question_id: number;
  answer: {
    value: string;
    optionId?: string;
    aiAnalysis?: {
      analysis: string;
      buttonResponses: {
        [key: string]: string;
      };
    };
    buttonResponses?: {};
  };
  created_at: string;
  updated_at: string;
  parent_repeater_id: number | null;
  branch_entry_id: string | null;
  branch_entry_index: number | null;
}

interface AnswersStore {
  answers: Answer[];
  setAnswers: (answers: Answer[]) => void;
  getAnswerByQuestionId: (questionId: number) => Answer | undefined;
}

export const useAnswersStore = create<AnswersStore>((set, get) => ({
  answers: [],
  setAnswers: (answers) => set({ answers }),
  getAnswerByQuestionId: (questionId) => {
    return get().answers.find(answer => answer.question_id === questionId);
  },
}));