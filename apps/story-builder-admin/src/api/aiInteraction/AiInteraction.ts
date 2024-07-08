import { Story } from "../story/Story";
import { User } from "../user/User";

export type AiInteraction = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  query: string | null;
  response: string | null;
  story?: Story | null;
  user?: User | null;
};
