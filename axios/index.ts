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
    // Add timeout to prevent hanging requests
    // timeout: 10000,
  });

  function getCookie(name: string): string | null {
    // Ensure this runs only in browser environment
    if (typeof window === 'undefined') {
      return null;
    }
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift() ?? null;
    return null;
  }

  axiosInstance.interceptors.request.use(
    (config) => {
      const accessToken = getCookie('auth_token');

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
    resentTokenForgetPassword: '/auth/resend-password-reset-token',
    verifyEmail: '/auth/verify-email',
    forgetPassword: '/auth/forgot-password',
    verifyForgetPassword: '/auth/verify-password-reset-token',
    resetPassword: '/auth/reset-password',
    resendEmail: '/auth/resend-verification-email',
    getGoogleAuth: '/auth/google-authurl',
    googleLoginAuth: '/auth/google-signin',
    googleRegisterAuth: '/auth/google-signup',
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
};
