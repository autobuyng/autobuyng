import { getSessionItem } from '@/lib/Sessionstorage';
import { SearchQuery } from '@/types/types';
import axios, { AxiosRequestConfig } from 'axios';

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
    timeout: 10000,
  });

  const accessToken = getSessionItem('accessToken');

  axiosInstance.interceptors.request.use(
    (config) => {
      if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => Promise.reject(error),
  );

  return axiosInstance;
};

export const usermgtApi = createAxiosInstance(ApiType.AUTOBUY);
// export const newsmgtApi = createAxiosInstance(ApiType.NEWSMGT);

// Generic fetcher with improved type safety
export const fetcher = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  console.log(url, 'userMgtApi');
  try {
    const res = await usermgtApi.get(url, { ...config });
    return res.data.data;
  } catch (error) {
    // Add error handling
    console.error('Fetcher error:', error);
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
    registerseller: 'auth/register/seller',
    resentToken: '/auth/resend-token',
    currentUser: '/auth/profile',
    resentTokenForgetPassword: '/auth/resend-password-reset-token',
    verifyEmail: '/auth/verify-email',
    forgetPassword: '/auth/forgot-password',
    verifyForgetPassword: '/auth/verify-password-reset-token',
    resetPassword: '/auth/reset-password',
    resendEmail: '/auth/resend-verification-email',
  },
  user: {
    profile: '/user',
    notification: '/notification',
    editProfile: (id: string) => `/user/update/${id}`,
    avatarUpload: '/user/settings/avatar',
  },
  friends: {
    friendslist: '/friends/list',
  },
  posts: {
    posts: '/posts',
    like: '/like/create',
    dislike: '/like/remove',
    share: '/',
  },
  search: {
    search: (data: SearchQuery) => buildSearchUrl('/search', data),
    likevehicle: (data: { vehicleId: string }) => `/vehicles/${data.vehicleId}/like`,
    getvehicle: (data: { vehicleId: string }) => `/vehicles/${data.vehicleId}`,
    getsimilarvehicle: (data: { vehicleId: string }) =>
      `/vehicles/${data.vehicleId}/similar-vehicles`,
    // `/search/?keyword=${data?.keyword}&mileage=${data?.mileage}&vin=${data.vin}&fuelType=${data?.fuelType}&transmission=${data?.transmission}&exteriorColor=${data?.exteriorColor}&interiorColor=${data?.interiorColor}&price=${data?.price}`,
  },
};

const buildSearchUrl = (basePath: string, data: SearchQuery): string => {
  const params = Object.entries(data)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .filter(([_, value]) => value !== undefined && value !== null) // Exclude undefined and null values
    .map(([key, value]) => `${key}=${encodeURIComponent(value as string)}`) // Encode and format key-value pairs
    .join('&');

  return `${basePath}?${params}`;
};

export const queryKeys = {
  user: {
    root: [{ type: 'currentUser' }],
  },
  // event: {
  //   root: [{ type: 'event' }],
  //   recentEvents: [{ type: 'recentEvents' }],
  //   recentMedias: [{ type: 'recentMedias' }],
  //   explore: [{ type: 'explore' }],
  //   id: (id: string) => [{ type: 'eventById', id }],
  //   user: (id: string) => [{ type: 'eventUser', id }],
  //   signature: [{ type: 'signature' }],
  // },
  // favorite: {
  //   root: [{ type: 'favoriteEvent' }],
  //   id: (id: string) => [{ type: 'favoriteEventById', id }],
  // },
  // auth: {
  //   root: [{ type: 'auth' }],
  // },
};
