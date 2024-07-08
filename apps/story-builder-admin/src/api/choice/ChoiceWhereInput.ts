import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StoryWhereUniqueInput } from "../story/StoryWhereUniqueInput";

export type ChoiceWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  nextPage?: StringNullableFilter;
  story?: StoryWhereUniqueInput;
};
