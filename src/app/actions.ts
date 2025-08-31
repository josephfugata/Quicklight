'use server';

import { z } from 'zod';

const FormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  preferredDate: z.date(),
  message: z.string().optional(),
});

type BookingResponse = {
  success: boolean;
  message?: string;
};

export async function bookConsultation(
  data: z.infer<typeof FormSchema>
): Promise<BookingResponse> {
  const parsedData = FormSchema.safeParse(data);

  if (!parsedData.success) {
    return { success: false, message: 'Invalid data provided.' };
  }

  // In a real application, you would save this to a database,
  // send an email, or integrate with a calendar API.
  console.log('New consultation booking request:', parsedData.data);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return { success: true };
}
