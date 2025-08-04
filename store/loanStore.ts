import { create } from 'zustand';

export interface PersonalInformation {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  nationalId: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
}

export interface EmploymentInformation {
  profession: 'SALARY_EARNER' | 'BUSINESS_OWNER' | 'SELF_EMPLOYED';

  employmentType?: string;
  industry?: string;
  employerName?: string;
  employerAddress?: string;
  yearsWithEmployer?: string;
  hasSideBusiness?: string | boolean;

  businessIndustry?: string;
  businessName?: string;
  businessType?: string;
  businessRegNumber?: string;
  yearsOfOperation?: string;
  hasBusinessBankAccount?: string | boolean;
  businessBank?: string;
  isDirector?: string | boolean;
  numberOfDirectors?: string;

  sideBusiness?: {
    businessName?: string;
    businessRegNumber?: string;
    businessType?: string;
    directorsBVN?: string;
    directorsFirstName?: string;
    directorsLastName?: string;
  };

  directorsInformation?: {
    directorsBVN?: string;
    directorsFirstName?: string;
    directorsLastName?: string;
  };

  totalMonthlyExpenses: number;
  totalTakeHomePay: number;
  monthlyGrossIncome?: number;
  vehiclePurpose: 'PERSONAL' | 'BUSINESS';
}

export interface LoanDetails {
  desiredEquityContribution: number;
  desiredMonthlyPayment: string;
  interestRateType: string;
  desiredInterestRate: number;
  desiredLoanTerm: string;
  desiredRepayment: string;
  subscribeRoadworthiness: boolean;
  subscribeLicenceRenewal: boolean;
  feePaymentType: 'UPFRONT' | 'MONTHLY';
  upfrontPayments: {
    vehicleRegistration: boolean;
    vehicleTracking: boolean;
    creditLifeInsurance: boolean;
    insuranceFirst12Months: boolean;
    warranty: boolean;
  };
}

export interface TermsAndConditions {
  consentCreditEnquiry: boolean;
  acknowledgeFinanceApproval: boolean;
  agreeTermsAndPrivacy: boolean;
}

export interface FormData {
  personalInformation: PersonalInformation;
  employmentInformation: EmploymentInformation;
  loanDetails: LoanDetails;
  termsAndConditions: TermsAndConditions;
}

interface FormStore {
  currentStep: number;
  formData: FormData;
  setCurrentStep: (step: number) => void;
  updatePersonalInformation: (data: PersonalInformation) => void;
  updateEmploymentInformation: (data: EmploymentInformation) => void;
  updateLoanDetails: (data: LoanDetails) => void;
  updateTermsAndConditions: (data: TermsAndConditions) => void;
  resetForm: () => void;
}

const initialFormData: FormData = {
  personalInformation: {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
    nationalId: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
  },
  employmentInformation: {
    profession: 'SALARY_EARNER',
    employmentType: '',
    industry: '',
    employerName: '',
    employerAddress: '',
    yearsWithEmployer: '',
    hasSideBusiness: false,
    businessIndustry: '',
    businessName: '',
    businessType: '',
    businessRegNumber: '',
    yearsOfOperation: '',
    hasBusinessBankAccount: false,
    businessBank: '',
    isDirector: false,
    numberOfDirectors: '',
    sideBusiness: {
      businessName: '',
      businessRegNumber: '',
      businessType: '',
      directorsBVN: '',
      directorsFirstName: '',
      directorsLastName: '',
    },
    directorsInformation: {
      directorsBVN: '',
      directorsFirstName: '',
      directorsLastName: '',
    },
    totalMonthlyExpenses: 0,
    totalTakeHomePay: 0,
    monthlyGrossIncome: 0,
    vehiclePurpose: 'PERSONAL',
  },
  loanDetails: {
    desiredEquityContribution: 0,
    desiredMonthlyPayment: '',
    interestRateType: '',
    desiredInterestRate: 30,
    desiredLoanTerm: '',
    desiredRepayment: '',
    subscribeRoadworthiness: false,
    subscribeLicenceRenewal: false,
    feePaymentType: 'UPFRONT',
    upfrontPayments: {
      vehicleRegistration: false,
      vehicleTracking: false,
      creditLifeInsurance: false,
      insuranceFirst12Months: false,
      warranty: false,
    },
  },
  termsAndConditions: {
    consentCreditEnquiry: false,
    acknowledgeFinanceApproval: false,
    agreeTermsAndPrivacy: false,
  },
};

const convertToBoolean = (value: string | boolean | undefined): boolean => {
  if (typeof value === 'boolean') return value;
  if (typeof value === 'string') return value === 'true';
  return false;
};

export const useFormStore = create<FormStore>((set) => ({
  currentStep: 1,
  formData: initialFormData,
  setCurrentStep: (step) => set({ currentStep: step }),
  updatePersonalInformation: (data) =>
    set((state) => ({
      formData: { ...state.formData, personalInformation: data },
    })),
  updateEmploymentInformation: (data) =>
    set((state) => ({
      formData: {
        ...state.formData,
        employmentInformation: {
          ...data,
          hasSideBusiness: convertToBoolean(data.hasSideBusiness),
          hasBusinessBankAccount: convertToBoolean(data.hasBusinessBankAccount),
          isDirector: convertToBoolean(data.isDirector),
        },
      },
    })),
  updateLoanDetails: (data) =>
    set((state) => ({
      formData: { ...state.formData, loanDetails: data },
    })),
  updateTermsAndConditions: (data) =>
    set((state) => ({
      formData: { ...state.formData, termsAndConditions: data },
    })),
  resetForm: () => set({ formData: initialFormData, currentStep: 1 }),
}));
