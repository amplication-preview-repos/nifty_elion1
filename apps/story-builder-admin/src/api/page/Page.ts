import { Story } from "../story/Story";

export type Page = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  imageUrl: string | null;
  story?: Story | null;
};
