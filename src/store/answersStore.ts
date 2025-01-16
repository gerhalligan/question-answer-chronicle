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
  getAnswersByBranchEntryId: (branchEntryId: string | null) => Answer[];
  getBranchEntryIds: () => (string | null)[];
  getBranchName: (branchEntryId: string | null) => string;
}

export const useAnswersStore = create<AnswersStore>((set, get) => ({
  answers: [],
  setAnswers: (answers) => set({ answers }),
  getAnswerByQuestionId: (questionId) => {
    return get().answers.find(answer => answer.question_id === questionId && !answer.branch_entry_id);
  },
  getAnswersByBranchEntryId: (branchEntryId) => {
    return get().answers.filter(answer => answer.branch_entry_id === branchEntryId);
  },
  getBranchEntryIds: () => {
    const answers = get().answers;
    const uniqueBranchIds = new Set(answers.map(answer => answer.branch_entry_id));
    return Array.from(uniqueBranchIds);
  },
  getBranchName: (branchEntryId) => {
    if (!branchEntryId) return 'General';
    const repeaterAnswer = get().answers.find(answer => answer.question_id === 5);
    if (!repeaterAnswer) return branchEntryId;
    
    try {
      const parsed = JSON.parse(repeaterAnswer.answer.value);
      const entry = parsed.entries.find((e: any) => e.id === branchEntryId);
      return entry?.values['509caa00-441a-4d49-abc7-d3dad5480100'] || branchEntryId;
    } catch (e) {
      console.error('Error parsing branch name:', e);
      return branchEntryId;
    }
  },
}));