import { z } from "zod";

const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters." }),
  email: z.string().email(),
});

export default schema;
