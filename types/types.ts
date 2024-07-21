import { StaticImageData } from 'next/image';

export type suggestionList = {
  value: string;
  label: string;
};
[];

export type VEHICLE_SEARCH_RESULTS_PROPS = {
  id: string;
  name: string;
  model: string;
  price: string;
  mileage: string;
  category: string;
  Img: StaticImageData;
}[];

export type FilterProps = {
  year: {
    min_year: string;
    max_year: string;
  };
  mileage?: string;
  // price: { max_price: string; min_price: string };
  price: number;

  sort?: {
    best_available?: boolean;
    lowest_price?: boolean;
    hightest_price?: boolean;
    lowest_mileage?: boolean;
    best_deals: boolean;
    newest_listed: boolean;
    oldest_listed: boolean;
  };
};
