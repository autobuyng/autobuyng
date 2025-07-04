import { getSessionItem } from '@/lib/Sessionstorage';
import {
  Address,
  FilterProps,
  Profile,
  SearchResponseData,
  User,
  Vehicle,
  VehicleData,
} from '@/types/types';
import { create } from 'zustand';

const default_filters = getSessionItem('filters');
export const DEFAULT_FILTERS: FilterProps = {
  year: {
    min_year: '',
  },
  price: {
    // min_price: 5000000,
  },
  ...default_filters,
};
type State = {
  user: User | null;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  isSellerLoading: boolean;
  setIsSellerLoading: (isLoading: boolean) => void;
  setUser: (user: User | null) => void;
  seller: User | null;
  setSeller: (seller: User | null) => void;
  profile: Profile | null;
  setProfile: (profile: Profile | null) => void;
  address: Address[] | null;
  setAddress: (address: Address[] | null) => void;
  sellerProfile: Profile | null;
  setSellerProfile: (profile: Profile | null) => void;
  sellerAddress: Address[] | null;
  setSellerAddress: (address: Address[] | null) => void;
  filters: FilterProps;
  setFilters: (filters: FilterProps | ((prev: FilterProps) => FilterProps)) => void;
  homePageSearchResult: SearchResponseData | null;
  setHomePageSearchResult: (homePageSearchResult: SearchResponseData | null) => void;
  vehicleDetails: VehicleData | null;
  setVehicleDetails: (vehicleData: VehicleData | null) => void;
  compareVehicles: Vehicle[];
  setCompareVehicles: (vehicles: Vehicle[] | ((prev: Vehicle[]) => Vehicle[])) => void;
};

export const useStore = create<State>((set) => ({
  isLoading: false,
  setIsLoading: (isLoading) => set({ isLoading }),
  isSellerLoading: false,
  setIsSellerLoading: (isSellerLoading) => set({ isSellerLoading }),

  user: null,
  setUser: (user) => set({ user }),

  seller: null,
  setSeller: (seller) => set({ seller }),

  profile: null,
  setProfile: (profile) => set({ profile }),

  address: null,
  setAddress: (address) => set({ address }),

  sellerProfile: null,
  setSellerProfile: (sellerProfile) => set({ sellerProfile }),

  sellerAddress: null,
  setSellerAddress: (sellerAddress) => set({ sellerAddress }),

  homePageSearchResult: null,
  setHomePageSearchResult: (homePageSearchResult) => set({ homePageSearchResult }),

  vehicleDetails: null,
  setVehicleDetails: (vehicleDetails) => set({ vehicleDetails }),

  filters: DEFAULT_FILTERS,
  setFilters: (update) =>
    set((state) => ({
      filters:
        typeof update === 'function' ? update(state.filters) : { ...state.filters, ...update },
    })),

  compareVehicles: [],
  setCompareVehicles: (vehicles) =>
    set((state) => ({
      compareVehicles: typeof vehicles === 'function' ? vehicles(state.compareVehicles) : vehicles,
    })),
}));
