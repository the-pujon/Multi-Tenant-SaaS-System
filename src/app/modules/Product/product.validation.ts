import { z } from "zod";

const createProductSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(2, { message: "Product name is required" })
      .max(120, { message: "Product name must be under 120 characters" }),
    price: z.coerce
      .number({ invalid_type_error: "Price must be a number" })
      .min(0, { message: "Price must be 0 or higher" }),
  }),
});

export const ProductValidation = {
  createProductSchema,
};
