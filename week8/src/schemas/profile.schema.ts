import { z } from "zod";

export const ProfileSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  age: z.number(),
});