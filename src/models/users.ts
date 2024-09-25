import { z } from "zod";

const UserDocument = z.object({
    id: z.number(),
    name: z.string().min(1, { message: "Name cannot be empty" }),
    email: z.string().email(),
    age: z.number().int().positive().optional(),
    isVerified: z.boolean(),
});

export type UserDocument = z.infer<typeof UserDocument>
