import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StoryWhereUniqueInput } from "../story/StoryWhereUniqueInput";

export type PageWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  imageUrl?: StringNullableFilter;
  story?: StoryWhereUniqueInput;
};
