import { z } from "zod";

const schema = z.object({
  name: z
    .string()
    .min(2, { message: "Product Name must be at least 2 characters." }),
  price: z
    .number()
    .min(1, { message: "Product price must be greater than zero." }),
});

export default schema;
