import { z } from 'zod';

export const RegistrationSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phoneNumber: z.string().regex(/^\d{11}$/, { message: 'Phone number must be 11 digits' }),
  password: z
    .string()
    .min(8, { message: 'Minimum 8 characters' })
    .regex(/[A-Z]/, { message: 'At least one uppercase letter' })
    .regex(/[a-z]/, { message: 'At least one lowercase letter' })
    .regex(/[0-9]/, { message: 'At least one number' })
    .regex(/^[A-Za-z0-9!@#$%^]+$/, { message: 'Only !@#$%^ special characters allowed' }),
});

export const SellerRegistrationSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  nin: z.string().min(3, { message: 'ninorcac is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phoneNumber: z.string().regex(/^\d{11}$/, { message: 'Phone number must be 11 digits' }),
  password: z
    .string()
    .min(8, { message: 'Minimum 8 characters' })
    .regex(/[A-Z]/, { message: 'At least one uppercase letter' })
    .regex(/[a-z]/, { message: 'At least one lowercase letter' })
    .regex(/[0-9]/, { message: 'At least one number' })
    .regex(/^[A-Za-z0-9!@#$%^]+$/, { message: 'Only !@#$%^ special characters allowed' }),
});

export const SellerRegistrationSchemaDealer = z.object({
  companyName: z.string().min(1, { message: 'company name is required' }),
  firstName: z.string().min(1, { message: 'First name is required' }),
  cac: z.string().min(3, { message: 'ninorcac is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phoneNumber: z.string().regex(/^\d{11}$/, { message: 'Phone number must be 11 digits' }),
  password: z
    .string()
    .min(8, { message: 'Minimum 8 characters' })
    .regex(/[A-Z]/, { message: 'At least one uppercase letter' })
    .regex(/[a-z]/, { message: 'At least one lowercase letter' })
    .regex(/[0-9]/, { message: 'At least one number' })
    .regex(/^[A-Za-z0-9!@#$%^]+$/, { message: 'Only !@#$%^ special characters allowed' }),
});

export const LoginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(8, { message: 'Password is required' }),
});

export const PasswordSchema = z.object({
  password: z
    .string()
    .min(8, { message: 'Minimum 8 characters' })
    .regex(/[A-Z]/, { message: 'At least one uppercase letter' })
    .regex(/[a-z]/, { message: 'At least one lowercase letter' })
    .regex(/[0-9]/, { message: 'At least one number' })
    .regex(/^[A-Za-z0-9!@#$%^]+$/, { message: 'Only !@#$%^ special characters allowed' }),
});

export const ContactDetailsSchema = z.object({
  phoneNumber: z
    .string()
    .min(10, { message: 'Phone number must be at least 10 digits' })
    .max(15, { message: 'Phone number must be at most 15 digits' })
    .regex(/^\d+$/, { message: 'Phone number must contain only digits' }),
  email: z.string().email({ message: 'Invalid email address' }),
  address: z.string().min(1, { message: 'Address is required' }),
  state: z.string().min(1, { message: 'State is required' }),
  city: z.string().min(1, { message: 'City is required' }),
  date: z.string().refine((value) => !isNaN(Date.parse(value)), {
    message: 'Invalid date format. Use YYYY-MM-DD',
  }),
  time: z.string(),
});

export type IContactDetailsSchema = z.infer<typeof ContactDetailsSchema>;
export type IRegistrationPayload = z.infer<typeof RegistrationSchema>;
export type ILoginPayload = z.infer<typeof LoginSchema>;
export type IPassword = z.infer<typeof PasswordSchema>;
export type ISellerRegistrationPayload = z.infer<typeof SellerRegistrationSchema>;
export type ISellerRegistrationPayloadDealer = z.infer<typeof SellerRegistrationSchemaDealer>;
