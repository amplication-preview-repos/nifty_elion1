import { StoryWhereUniqueInput } from "../story/StoryWhereUniqueInput";

export type PageUpdateInput = {
  content?: string | null;
  imageUrl?: string | null;
  story?: StoryWhereUniqueInput | null;
};
