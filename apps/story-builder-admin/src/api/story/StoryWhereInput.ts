import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PageListRelationFilter } from "../page/PageListRelationFilter";
import { ChoiceListRelationFilter } from "../choice/ChoiceListRelationFilter";
import { AiInteractionListRelationFilter } from "../aiInteraction/AiInteractionListRelationFilter";

export type StoryWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  summary?: StringNullableFilter;
  author?: StringNullableFilter;
  pages?: PageListRelationFilter;
  choices?: ChoiceListRelationFilter;
  aiInteractions?: AiInteractionListRelationFilter;
};
