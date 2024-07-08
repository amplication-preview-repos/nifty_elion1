import { StoryWhereUniqueInput } from "../story/StoryWhereUniqueInput";

export type PageCreateInput = {
  content?: string | null;
  imageUrl?: string | null;
  story?: StoryWhereUniqueInput | null;
};
