import { JsonValue } from "type-fest";
import { AiInteraction } from "../aiInteraction/AiInteraction";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  aiInteractions?: Array<AiInteraction>;
};
