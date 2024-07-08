import { StoryWhereUniqueInput } from "../story/StoryWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AiInteractionUpdateInput = {
  query?: string | null;
  response?: string | null;
  story?: StoryWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
