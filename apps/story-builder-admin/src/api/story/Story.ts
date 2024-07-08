import { Page } from "../page/Page";
import { Choice } from "../choice/Choice";
import { AiInteraction } from "../aiInteraction/AiInteraction";

export type Story = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  summary: string | null;
  author: string | null;
  pages?: Array<Page>;
  choices?: Array<Choice>;
  aiInteractions?: Array<AiInteraction>;
};
