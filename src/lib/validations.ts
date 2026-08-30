import { z } from 'zod';

export const orderItemSchema = z.object({
  name: z.string().min(1),
  qty: z.number().int().min(1).max(99),
  price: z.number().min(0),
  breakdown: z.array(z.string()).optional(), // for custom box items (e.g. ['2x Classic Fudge', '2x Nutella'])
});

export const orderSchema = z.object({
  customer_name: z.string().min(2, 'Name must be at least 2 characters'),
  customer_email: z.string().email('Please enter a valid email address'),
  customer_phone: z.string().min(10, 'Please enter a valid 10-digit phone number'),
  delivery_address: z.string().min(5, 'Delivery address is required'),
  pincode: z.string().min(6, 'Valid 6-digit Chennai pincode required'),
  special_instructions: z.string().optional(),
  order_type: z.string().default('Cart Checkout'),
  payment_method: z.string().default('UPI / WhatsApp Pay'),
  items: z.array(orderItemSchema).min(1, 'Cart cannot be empty'),
  total_amount: z.number().min(0),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
  utm_term: z.string().optional(),
  utm_content: z.string().optional(),
  b_website: z.string().optional(), // Honeypot field for bot detection
});

export const workshopReservationSchema = z.object({
  workshop_id: z.string().min(1),
  workshop_name: z.string().min(1),
  selected_date: z.string().min(1),
  selected_slot: z.string().min(1),
  seats: z.number().int().min(1).max(10),
  attendee_name: z.string().min(2, 'Name must be at least 2 characters'),
  attendee_email: z.string().email('Valid email address is required'),
  attendee_phone: z.string().min(10, 'Valid phone number is required'),
  special_notes: z.string().optional(),
  payment_method: z.string().default('UPI / WhatsApp Reservation'),
  total_amount: z.number().min(0),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
  b_website: z.string().optional(), // Honeypot
});

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Valid email address required'),
  phone: z.string().min(10, 'Valid 10-digit phone number required'),
  inquiry_type: z.string().default('General Inquiry'), // e.g. Corporate Gifting, Workshop Inquiry, Bulk Orders
  message: z.string().min(10, 'Message must be at least 10 characters'),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
  b_website: z.string().optional(), // Honeypot
});

export const feedbackSchema = z.object({
  customer_name: z.string().min(2, 'Name must be at least 2 characters'),
  rating: z.number().int().min(1).max(5),
  favorite_flavor: z.string().optional(),
  review: z.string().min(5, 'Review must be at least 5 characters'),
  b_website: z.string().optional(), // Honeypot
});
