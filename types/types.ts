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
  [key: string]: any;
  year: {
    min_year: string; // Corresponds to yearMin in the query
    max_year: string; // Corresponds to yearMax in the query
  };
  make?: string; // Corresponds to make in the query
  model?: string; // Corresponds to vehicleModel in the query
  mileage?: string; // Corresponds to mileage in the query
  price: {
    min_price?: number; // Corresponds to priceMin in the query
    max_price?: number; // Corresponds to priceMax in the query
  };
  body_type?: string; // Corresponds to type (Sedan in the query)
  vehicle_condition?: string; // Corresponds to condition (New in the query)
  vehicle_type?: string; // Corresponds to type (Sedan in the query)
  fuel_type?: string; // Corresponds to fuelType in the query
  transmission?: string; // Corresponds to transmission in the query
  exterior_color?: string; // Corresponds to exteriorColor in the query
  interior_color?: string; // Corresponds to interiorColor in the query
  drive_train?: string; // Corresponds to driveTrain in the query
  engine?: string; // Corresponds to engine in the query
  keyword?: string; // Corresponds to keyword in the query
  cylinders?: string;
  convenience?: string;
  safety?: string;
  door_count?: string;
  entertainment?: string;
  exterior?: string;
  sortParameter?: string;
  sortOrder?: 'asc' | 'desc';
  sort?: string;
  page?: number; // Corresponds to page in the query
  limit?: number; // Corresponds to limit in the query
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

export type ISellerRegistrationResponse = {
  status: boolean;
  message: string;
  data: {
    message: string;
  };
};

type VehicleType = {
  _id: string;
  name: string;
  url: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type Vehicle = {
  _id: string;
  make: string;
  vehicleModel: string;
  condition: string;
  vehicleYear: number;
  vehicleTypeId?: string;
  mileage: string;
  vin: string;
  fuelType: string;
  transmission: string;
  exteriorColor: string;
  interiorColor: string;
  price: number | string;
  fuelConsumption: string;
  images: string[];
  engine: string;
  liked?: boolean;
  vehicleType: VehicleType[];
};

export type SearchResponseData = {
  vehicles: Vehicle[];
  count: number;
  currentPage: number;
  nextPage: number | null;
  prevPage: number | null;
  lastPage: number;
};

export type ApiResponse = {
  status: boolean;
  message: string;
  data: SearchResponseData;
};

export type SearchQuery = {
  vin?: string;
  price?: number;
  keyword?: string;
  userId?: string;
  make?: string;
  vehicleModel?: string;
  condition?: string;
  yearMin?: number | string;
  yearMax?: number | string;
  type?: string;
  mileage?: string; // Mileage is a string (e.g., "70k miles")
  fuelType?: string;
  transmission?: string;
  exteriorColor?: string;
  interiorColor?: string;
  driveTrain?: string;
  engine?: string;
  priceMin?: number | string;
  priceMax?: number | string;
  sortParameter?: string;
  sortOrder?: 'asc' | 'desc';
  page?: number;
  limit?: number;
};

interface VehicleReliabilityScore {
  overall: number;
  engine: number;
  body: number;
  wheels: number;
  accessories: number;
}

export type VehicleData = {
  _id: string;
  sellerId: string;
  make: string;
  vehicleModel: string;
  condition: string;
  vehicleYear: number;
  vehicleType: string;
  mileage: string;
  vin: string;
  fuelType: string;
  transmission: string;
  exteriorColor: string;
  interiorColor: string;
  driveTrain: string;
  price: number;
  fuelConsumption: string;
  features: string[];
  reliabilityScore: VehicleReliabilityScore;
  images: string[];
  note: string | null;
  engine: string;
  isInspected: boolean;
  availabilityStatus: string;
  uploadedFiles: any[]; // Adjust this type if you have a specific structure for files
  comfort: string | null; // Adjust type if structure is known
  entertainment: string | null; // Adjust type if structure is known
  exteriorAndMechanical: string | null; // Adjust type if structure is known
  interior: string | null; // Adjust type if structure is known
  mechanical: string | null; // Adjust type if structure is known
  tech: string | null; // Adjust type if structure is known
  likes: string[]; // Adjust type if structure is known
  createdAt: string; // Consider using Date if parsed
  updatedAt: string; // Consider using Date if parsed
  __v: number;
};

export type SingleVehicleResponse = {
  status: boolean;
  message: string;
  data: VehicleData;
};

export type LoginResponse = {
  status: boolean;
  message: string;
  data: {
    user: User;
    accessToken: string;
    refreshToken: string;
  };
};

export type SimilarVehicleApiResponse = {
  status: boolean;
  message: string;
  data: {
    vehicles: Vehicle[];
  };
};

export interface AddressResponse {
  status: boolean;
  message: string;
  data: {
    address: Address;
  };
}

export interface Address {
  address: string;
  city: string;
  region: string;
  isActive?: boolean;
  _id?: string;
}

export type AddressProps = {
  // firstname: string;
  // lastname: string;
  // phonenumber: string;
  phonenumber2?: string;
  city: string;
  region: string;
  address: string;
  additionalInformation?: string;
};

export type FavoriteVehicleResponse = {
  status: boolean;
  message: string;
  likedVehicles: Vehicle[];
  count: number;
  currentPage: number;
  nextPage: number | null;
  prevPage: number | null;
  lastPage: number;
};

export type FavoriteVehicle = {
  _id: string;
  make: string;
  vehicleModel: string;
  condition: string;
  mileage: string;
  price: number;
  images: string[];
};

export type ContactDetails = {
  phoneNumber: string;
  email: string;
  address: string;
  state: string;
  city: string;
  date: string; // ISO format or "YYYY-MM-DD"
  time: string; // Time format, e.g., "HH:mm AM/PM"
};

export type UserResponse = {
  status: boolean;
  message: string;
  data: {
    user: User;
    profile: Profile;
    addresses: Address[];
  };
};
export type EmailverificationResponse = {
  status: boolean;
  message: string;
  accessToken: string;
  data: {
    user: User;
    profile: Profile;
    addresses: Address[];
  };
};

export type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  verifiedAt: string;
};

export type Profile = {
  _id: string;
  // userId: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  additionalPhoneNumber: string;
  additionalInformation: string;
  dob?: string;
  // __v: number;
};

export type BankDetailsProps = {
  accountNumber: string;
  bankName: string;
  accountName: string;
};

export type BankAccount = {
  _id: string;
  sellerId: string;
  bankName: string;
  accountName: string;
  accountNumber: string;
  isActive: boolean;
  createdAt: string; // Use `Date` if you want to parse this string into a Date object
  updatedAt: string; // Use `Date` if you want to parse this string into a Date object
  __v: number;
};

export type getAllBankDetailsResponse = {
  status: boolean;
  message: string;
  data: BankAccount[];
};

export type UploadVehicleDataTypes = {
  make: string;
  vin: string;
  condition: string;
  price: string;
  note: string;
  vehicleType: string;
  vehicleYear: string;
  address: string;
  otherSupportingDocuments?: File[];
  certificateProofOfOwnership?: File[];
  nationalCertificateOfRoadworthiness?: File[];
  vehicleLicense?: File[];
  auctionPurchaseReceipts?: File[];
  picturesOfVehicle: File[];
  purchaseReceipts: File[];
  registrationDocuments: File[];
  allRepairsReceipts: File[];
  shippingCustomClearanceDocuments: File[];
};
