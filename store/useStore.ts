import { getSessionItem } from '@/lib/Sessionstorage';
import { Address, FilterProps, Profile, User } from '@/types/types';
import { create } from 'zustand';

const default_filters = getSessionItem('filters');
const DEFAULT_FILTERS: FilterProps = {
  year: {
    min_year: '2009',
    max_year: '',
  },
  price: {
    min_price: 5000000,
  },
  ...default_filters,
};

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
  filters: FilterProps;
  setFilters: (filters: FilterProps | ((prev: FilterProps) => FilterProps)) => void;
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
  filters: DEFAULT_FILTERS,
  setFilters: (update) =>
    set((state) => ({
      filters:
        typeof update === 'function' ? update(state.filters) : { ...state.filters, ...update },
    })),
}));
