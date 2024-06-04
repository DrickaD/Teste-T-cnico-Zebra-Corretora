import { z } from "zod";
import { StateSchema } from "../schemas/schema";

export type State = z.infer<typeof StateSchema>;