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
    min_year?: string; // Corresponds to yearMin in the query
    max_year?: string; // Corresponds to yearMax in the query
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
  mileageMin?: string | number;
  mileageMax?: string | number;
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
  exteriorImages?: string[];
  interiorImages?: string[];
  tyreImages?: string[];
  trunkImages?: string[];
  engineImages?: string[];
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
  mileageMax?: number | string;
  mileageMin?: number | string;
};

interface VehicleReliabilityScore {
  overall: number;
  engine: number;
  body: number;
  wheels: number;
  accessories: number;
}

type Features = {
  comfort: string[];
  entertainment: string[];
  tech: string[];
  interior: string[];
  exterior: string[];
  mechanical: string[];
  safety: string[];
  performance: string[];
  convenience: string[];
  offRoad: string[];
  sustainabilityAndEfficiency: string[];
  advancedDriverAssistanceSystems: string[];
  luxury: string[];
};

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
  features: Features;
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
  data: {
    accessToken: string;
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
  bankCode?: string;
};

export type BankAccount = {
  _id: string;
  sellerId: string;
  bankName: string;
  accountName: string;
  accountNumber: string;
  bankCode?: string;
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
  model: string;
  otherSupportingDocuments?: File[];
  certificateProofOfOwnership?: File[];
  nationalCertificateOfRoadworthiness?: File[];
  vehicleLicense?: File[];
  auctionPurchaseReceipts?: File[];
  picturesOfVehicle: File[];
  purchaseReceipts?: File[];
  registrationDocuments?: File[];
  allRepairReceipts?: File[];
  shippingCustomClearanceDocuments?: File[];
};

// Define the structure of a single brand
export type Make = {
  id: number;
  name: string;
};
export type Model = {
  id: number;
  make_id: number;
  name: string;
};

// Define the structure of the full response
export type MakeApiResponse = {
  status: boolean;
  message: string;
  data: Make[];
};

// Define the file object structure
export type File = {
  _id: string;
  fileType: string;
  file: string;
  vehicleId: string;
};

// Define the vehicle structure
export type UploadedVehicle = {
  _id: string;
  userId: string;
  make: string;
  vehicleYear: number;
  vin: string;
  description: string | null;
  status: string;
  files: File[];
};

// Define the paginated response structure
export type UploadedVehiclesResponse = {
  vehicles: UploadedVehicle[];
  count: number;
  currentPage: number;
  nextPage: number | null;
  prevPage: number | null;
  lastPage: number;
};

export type SingleVehicleData = {
  _id: string;
  userId: string;
  address: string;
  make: string;
  condition: string;
  vehicleYear: number;
  vehicleType: string;
  vin: string;
  price: number;
  note: string;
  description: string | null;
  status: string;
  availabilityStatus: string;
  trackingId: string;
  comfort: string[]; // Can be refined if the structure is known
  entertainment: string[]; // Can be refined if the structure is known
  exterior: string[]; // Can be refined if the structure is known
  interior: string[]; // Can be refined if the structure is known
  mechanical: string | null; // Can be refined if the structure is known
  tech: string[]; // Can be refined if the structure is known
  exteriorImages: string[]; // Can be refined if the structure is known
  interiorImages: string[]; // Can be refined if the structure is known
  engineImages: string[]; // Can be refined if the structure is known
  trunkImages: string[]; // Can be refined if the structure is known
  tyreImages: string[]; // Can be refined if the structure is known
  dignostics: string[]; // Can be refined if the structure is known
  likes: string[]; // Can be refined if the structure is known
  createdAt: string;
  updatedAt: string;
  __v: number;
  files: VehicleFile[];
};

export type VehicleFile = {
  _id: string;
  fileType: string;
  file: string;
  vehicleId: string;
};

export type ResolveBankResponse = {
  status: boolean;
  message: string;
  data: {
    account_number: string;
    account_name: string;
    bank_id: number;
  };
};

export type AccountOrder = {
  data: {
    orderId: string;
    accountNumber: string;
    initiationRef: string;
    accountName: string;
  };
};

export type NinDataResponse = {
  status: boolean;
  message: string;
  data: UserData;
};

export type UserData = {
  firstname: string;
  surname: string;
  middlename: string;
  birthdate: string;
  userid: string;
  gender: string;
  telephoneno: string;
  vnin: string;
  self_origin_lga: string;
  heigth: string;
  birthstate: string;
  signature: string | null;
  religion: string;
  educationallevel: string;
  maritalstatus: string;
  self_origin_state: string;
  spoken_language: string;
  self_origin_place: string;
  residence_town: string;
  nok_town: string;
  residence_state: string;
  residence_address: string;
  birthcountry: string;
  psurname: string;
  pfirstname: string;
  nok_lga: string;
  nok_address2: string;
  nok_state: string;
  nok_surname: string;
  nok_firstname: string;
  ospokenlang: string;
  residencestatus: string;
  pmiddlename: string;
  email: string;
  nok_postalcode: string;
  nin: string;
  employmentstatus: string;
  birthlga: string;
  residence_lga: string;
  title: string;
  profession: string;
  nok_address1: string;
  photo: string | null;
  nok_middlename: string;
  tracking_id: string;
  central_iD: string;
};

export type CacDataResponse = {
  status: boolean;
  message: string;
  data: CompanyData;
};

export type CompanyData = {
  id: number;
  rc_number: string;
  registration_date: string;
  registration_approved: boolean;
  active: boolean;
  classification: string;
  classification_id: number;
  company_type_name: string;
  nature_of_business_name: string;
  objectives: string | null;
  delisting_status: string | null;
  approved_name: string;
  email: string;
  state: string;
  city: string;
  lga: string;
  address: string;
  branch_address: string;
  head_office_address: string;
  business_commencement_date: string | null;
};

export type DashboardStatsResponse = {
  type: string;
  count: number;
  percentageChange: number;
};

// Base Vehicle Type

// Main Data Item Type
export type OrderDetails = {
  reminderSent: boolean;
  _id: string;
  vehicleId: Vehicle;
  buyerId: string;
  amount: number;
  status: string;
  accountNumber: string;
  initiationRef: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

// Root Data Structure
export type OrderListResponse = {
  data: OrderDetails[];
};
