import { Story } from "../story/Story";

export type Choice = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  nextPage: string | null;
  story?: Story | null;
};
