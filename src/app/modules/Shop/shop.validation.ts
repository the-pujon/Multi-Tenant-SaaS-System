import { z } from "zod";

const createShopSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(2, { message: "Shop name is required" })
      .max(100, { message: "Shop name must be under 100 characters" }),
  }),
});

export const ShopValidation = {
  createShopSchema,
};
