import { StoryWhereUniqueInput } from "../story/StoryWhereUniqueInput";

export type ChoiceUpdateInput = {
  description?: string | null;
  nextPage?: string | null;
  story?: StoryWhereUniqueInput | null;
};
