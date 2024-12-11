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

export type IRegistrationPayload = z.infer<typeof RegistrationSchema>;
export type ILoginPayload = z.infer<typeof LoginSchema>;
export type IPassword = z.infer<typeof PasswordSchema>;
