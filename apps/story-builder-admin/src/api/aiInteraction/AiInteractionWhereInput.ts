import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StoryWhereUniqueInput } from "../story/StoryWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AiInteractionWhereInput = {
  id?: StringFilter;
  query?: StringNullableFilter;
  response?: StringNullableFilter;
  story?: StoryWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
