import { z } from 'zod';

export const orderSchema = z.object({
  customer_name: z.string().max(100).default('WhatsApp Shopper'),
  customer_email: z.string().email('Invalid email').max(150).or(z.literal('')).optional().nullable(),
  customer_phone: z.string().max(20).default('WhatsApp Chat'),
  delivery_address: z.string().max(300).default('Direct WhatsApp Checkout'),
  pincode: z.string().max(10).default('638401'),
  special_instructions: z.string().max(500).optional().nullable(),
  order_type: z.string().optional(),
  items: z.array(z.any()).min(1, 'Order must contain at least one item'),
  total_amount: z.string().or(z.number()),
  utm_source: z.string().optional().nullable(),
  utm_medium: z.string().optional().nullable(),
  utm_campaign: z.string().optional().nullable(),
  b_website: z.string().optional().nullable(), // Anti-spam Honeypot
});

export const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().email('Invalid email').max(150),
  phone: z.string().min(5, 'Invalid phone number').max(20),
  product: z.string().max(100),
  message: z.string().max(1000).optional().nullable(),
  b_website: z.string().optional().nullable(), // Anti-spam Honeypot
});

export const feedbackSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  rating: z.number().int().min(1).max(5),
  message: z.string().min(1, 'Message is required').max(1000),
});
