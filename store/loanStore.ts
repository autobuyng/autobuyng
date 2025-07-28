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
  employmentType: string;
  industry: string;
  employerName: string;
  employerAddress: string;
  yearsWithEmployer: string;
  hasSideBusiness: boolean;
  businessName?: string;
  businessRegNumber?: string;
  businessType?: string;
  directorsBVN?: string;
  directorsFirstName?: string;
  directorsLastName?: string;
  totalMonthlyExpenses: number;
  totalTakeHomePay: number;
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

export interface FinancialInformation {
  monthlyExpenses: number;
  existingLoans?: number;
  bankName: string;
  accountNumber: string;
  accountType: string;
}

export interface FormData {
  personalInformation: PersonalInformation;
  employmentInformation: EmploymentInformation;
  loanDetails: LoanDetails;
  termsAndConditions: TermsAndConditions;
  financialInformation: FinancialInformation;
}

interface FormStore {
  currentStep: number;
  formData: FormData;
  setCurrentStep: (step: number) => void;
  updatePersonalInformation: (data: PersonalInformation) => void;
  updateEmploymentInformation: (data: EmploymentInformation) => void;
  updateLoanDetails: (data: LoanDetails) => void;
  updateTermsAndConditions: (data: TermsAndConditions) => void;
  updateFinancialInformation: (data: FinancialInformation) => void;
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
    businessName: '',
    businessRegNumber: '',
    businessType: '',
    directorsBVN: '',
    directorsFirstName: '',
    directorsLastName: '',
    totalMonthlyExpenses: 0,
    totalTakeHomePay: 0,
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
  financialInformation: {
    monthlyExpenses: 0,
    existingLoans: 0,
    bankName: '',
    accountNumber: '',
    accountType: '',
  },
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
      formData: { ...state.formData, employmentInformation: data },
    })),
  updateLoanDetails: (data) =>
    set((state) => ({
      formData: { ...state.formData, loanDetails: data },
    })),
  updateTermsAndConditions: (data) =>
    set((state) => ({
      formData: { ...state.formData, termsAndConditions: data },
    })),
  updateFinancialInformation: (data) =>
    set((state) => ({
      formData: { ...state.formData, financialInformation: data },
    })),
  resetForm: () => set({ formData: initialFormData, currentStep: 1 }),
}));
