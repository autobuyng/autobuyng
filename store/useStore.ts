import { Address, Profile, User } from '@/types/types';
import { create } from 'zustand';

type State = {
  user: User | null;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  setUser: (user: User | null) => void;
  seller: User | null;
  setSeller: (seller: User | null) => void;
  profile: Profile | null;
  setProfile: (profile: Profile | null) => void;
  address: Address[] | null;
  setAddress: (address: Address[] | null) => void;
};

export const useStore = create<State>((set) => ({
  isLoading: false,
  setIsLoading: (isLoading) => set({ isLoading }),
  user: null,
  setUser: (user) => set({ user }),
  seller: null,
  setSeller: (seller) => set({ seller }),
  profile: null,
  setProfile: (profile) => set({ profile }),
  address: null,
  setAddress: (address) => set({ address }),
}));
