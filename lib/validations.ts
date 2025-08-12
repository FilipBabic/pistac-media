import { z } from 'zod';

export const subscribeFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters.' })
    .max(100),
  email: z.string().email({ message: 'Enter a valid email.' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters.' })
    .max(1000)
    .optional()
    .or(z.literal('')),
});

export type SubscribeFormValues = z.infer<typeof subscribeFormSchema>;
