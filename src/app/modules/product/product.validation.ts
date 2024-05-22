import { z } from 'zod';

// Varient Schema Validation
const variantValidationSchema = z.object({
  type: z.string().trim(),
  value: z.string().trim(),
});

// Inventory Schema Validation
const inventoryValidationSchema = z.object({
  quantity: z.number(),
  inStock: z.boolean(),
});

// Product Schema Validation
const productValidationSchema = z.object({
  id: z.number().int().positive('ID must be a positive integer'),
  name: z.string().max(25).trim(),
  description: z.string().trim(),
  price: z.number().positive('Price cannot be negative'),
  category: z.string(),
  tags: z.array(z.string()),
  variants: z.array(variantValidationSchema),
  inventory: inventoryValidationSchema,
});

export default productValidationSchema;
