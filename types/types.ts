import { StaticImageData } from 'next/image';

export type suggestionList = {
  value: string;
  label: string;
};
[];

export type VEHICLE_SEARCH_RESULTS_PROPS = {
  id: string;
  Img: StaticImageData;
  name: string;
  model: string;
  mileage: string;
  price: string;
  category: string;
  mpg: string;
  bodyStyle: string;
  engin: string;
  transmission: string;
  color: string;
  vin: string;
  desc: string;
};

export type FilterProps = {
  year: {
    min_year: string;
    max_year: string;
  };
  mileage?: string;
  // price: { max_price: string; min_price: string };
  price: number;

  body_style: string;
  vehicle_condition?: string;
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

export type SIDEBAR_ITEMS_TYPES = {
  id: string;
  text: string;
  path: string;
  Icon: (color: any) => JSX.Element;
}[];

export type ILoginPayload = {
  email: string;
  password: string;
};

export type IAccountCreationResponse = {
  status: boolean;
  message: string;
  data: {
    message: string;
  };
};
