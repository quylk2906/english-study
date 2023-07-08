import { create } from 'zustand';

type UserData = {
  name: string;
  savedWords: string[];
};

type Store = {
  userData: UserData;
  setUserData: (data: UserData) => void;
};

export const useWordsStore = create<Store>((set) => ({
  userData: {
    name: '',
    savedWords: [],
  },
  setUserData: (value) =>
    set(() => {
      return { userData: value };
    }),
}));
