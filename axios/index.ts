import { getLocalItem } from '@/lib/localStorage';
import { removeSessionItem } from '@/lib/Sessionstorage';
import { SearchQuery } from '@/types/types';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';

export enum ApiType {
  AUTOBUY = 'AUTOBUY',
}

const createAxiosInstance = (baseUrlKey: ApiType) => {
  // Mapping of API types to their respective base URLs
  const baseUrls = {
    [ApiType.AUTOBUY]: process.env.NEXT_PUBLIC_AUTOBUY_URL,
  };
  const axiosInstance = axios.create({
    baseURL: baseUrls[baseUrlKey],
    withCredentials: true,
    // Add timeout to prevent hanging requests
    timeout: 200000,
  });

  // const accessToken = getSessionItem('accessToken');

  axiosInstance.interceptors.request.use(
    (config) => {
      const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
      const isSeller = currentPath.includes('sell-a-car');
      const accessToken = isSeller
        ? getLocalItem('sellerAccessToken')
        : getLocalItem('accessToken');
      if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => Promise.reject(error),
  );

  // Response Interceptor
  axiosInstance.interceptors.response.use(
    (response) => {
      // Return the response directly if no issues
      return response;
    },
    async (error) => {
      const { response } = error;

      // Handle Unauthorized Errors
      // if (response && (response.status === 401 || response.status === 403)) {
      //   const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
      //   const isSeller = currentPath.startsWith('/sell-a-car');
      //   const isBuyerPrivate = currentPath.startsWith('/payment/');
      //   // Clear the relevant token and redirect to the appropriate login page
      //   if (isSeller) {
      //     removeSessionItem('sellerAccessToken');
      //     currentPath !== '/sell-a-car' &&
      //       currentPath !== '/sell-a-car/login' &&
      //       (window.location.href = process.env.NEXT_PUBLIC_SELLER_URL!);
      //   } else {
      //     removeSessionItem('accessToken');
      //     if (isBuyerPrivate) {
      //       window.location.href = process.env.NEXT_PUBLIC_BUYER_URL!;
      //     }
      //   }
      // }

      return Promise.reject(error);
    },
  );

  return axiosInstance;
};

export const usermgtApi = createAxiosInstance(ApiType.AUTOBUY);

export const fetcher = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  try {
    const res = await usermgtApi.get(url, { ...config });
    return res.data.data;
  } catch (error: AxiosError | any) {
    console.error('Fetcher error:', {
      status: error.response?.status,
      message: error.message,
      url: url,
    });

    throw error;
  }
};
export const fetcherPostRequest = async <T>(
  url: string,
  body?: any,
  config?: AxiosRequestConfig,
): Promise<T> => {
  try {
    const res = await usermgtApi.post<T>(url, body, config);
    return res.data;
  } catch (error: AxiosError | any) {
    console.error('Fetcher error:', {
      status: error.response?.status,
      message: error.message,
      url: url,
    });

    throw error;
  }
};

export const mutator = async <Data>(request: AxiosRequestConfig): Promise<Data> => {
  try {
    const res = await usermgtApi(request);
    return res.data;
  } catch (e: unknown) {
    if (axios.isAxiosError(e)) {
      throw e.response?.data || e;
    }
    throw e;
  }
};

export const endpoints = {
  auth: {
    login: '/auth/login',
    register: '/auth/register/buyer',
    registerWithGoogle: '/auth/google',
    registerWithFacebook: '/auth/facebook',
    registerseller: 'auth/register/seller',
    resentToken: '/auth/resend-token',
    currentUser: '/auth/profile',
    resentTokenForgetPassword: '/auth/resend-password-reset-token',
    verifyEmail: '/auth/verify-email',
    forgetPassword: '/auth/forgot-password',
    verifyForgetPassword: '/auth/verify-password-reset-token',
    resetPassword: '/auth/reset-password',
    resendEmail: '/auth/resend-verification-email',
    verifyIdentity: '/auth/verify-identity',
  },
  user: {
    profile: '/user',
    addAddress: '/users/add-address',
    getFavoriteVehicle: '/users/favorite-vehicles',
    editUserProfile: '/users/profile-edit',
    addBankDetails: '/seller/add-bank-details',
    getBankDetails: 'seller/get-all-bank-details',
    updateAddress: (id: string) => `/users/address/${id}`,
    deleteAddress: (id: string) => `/users/address/${id}`,
    setActiveAddress: (id: string) => `/users/set-active-address/${id}`,
    editProfile: (id: string) => `/user/update/${id}`,
    updataBankDetails: (id: string) => `/seller/update-bank-details/${id}`,
    setActiveBankDetails: (id: string) => `/seller/set-active-bank-details/${id}`,
    deleteBankDetails: (id: string) => `/seller/delete-bank-details/${id}`,
  },
  friends: {
    friendslist: '/friends/list',
  },
  upload: {
    bookInspection: '/seller/book-inspection',
    getAllVehicle: '/vehicles/seller',
    uploadVehicle: '/vehicles/seller-upload',
    getVehicleMake: '/search/makes',
    getVehicleModel: (data: { make: string }) => `/search/models?model=${data.make}`,
    getSingleVehicle: (id: string) => `/vehicles/seller/${id}`,
  },
  search: {
    search: (data: SearchQuery) => buildSearchUrl('/search', data),
    likevehicle: (data: { vehicleId: string }) => `/vehicles/${data.vehicleId}/like`,
    likeMultipleVehicle: (vehicles: string[]) => `/vehicles/like/offline`,
    getvehicle: (data: { vehicleId: string }) => `/vehicles/${data.vehicleId}`,
    getsimilarvehicle: (data: { vehicleId: string }) =>
      `/vehicles/${data.vehicleId}/similar-vehicles`,
    compare: '/vehicles/compare',
  },
  dashboard: {
    getAnalytics: '/seller/analytics',
  },
  payment: {
    createOrder: (data: { vehicleId: string }) => `/order/create-order/${data.vehicleId}`,
    serverSideEvent: (data: { merchantId: string }) =>
      `order/transaction/notifications/${data.merchantId}`,
    orderList: '/order/vehicle',
  },
  loan: {
    getEstimate: `/loan/calculate`,
  },
  waitlist: '/waitlist',
};

const buildSearchUrl = (basePath: string, data: SearchQuery): string => {
  const params = Object.entries(data)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .filter(([_, value]) => value !== undefined && value !== null)
    .map(([key, value]) => `${key}=${encodeURIComponent(value as string)}`)
    .join('&');

  return `${basePath}?${params}`;
};

export const queryKeys = {
  user: {
    root: [{ type: 'currentUser' }],
    getFavoriteVehicle: [{ type: 'getFavoriteVehicle' }],
    getBankDetails: [{ type: 'getBankDetials' }],
  },
  vehicle: {
    getAllVehicle: [{ type: 'getAllVehicle' }],
    getAllVehicleMake: [{ type: 'getAllVehicleMake' }],
    getAllVehicleModel: [{ type: 'getAllVehicleModel' }],
    getSingleVehicle: [{ type: 'getSingleVehicle' }],
  },
};
