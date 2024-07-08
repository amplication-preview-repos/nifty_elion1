import { StoryWhereUniqueInput } from "../story/StoryWhereUniqueInput";

export type ChoiceCreateInput = {
  description?: string | null;
  nextPage?: string | null;
  story?: StoryWhereUniqueInput | null;
};
