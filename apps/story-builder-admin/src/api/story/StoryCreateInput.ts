import { PageCreateNestedManyWithoutStoriesInput } from "./PageCreateNestedManyWithoutStoriesInput";
import { ChoiceCreateNestedManyWithoutStoriesInput } from "./ChoiceCreateNestedManyWithoutStoriesInput";
import { AiInteractionCreateNestedManyWithoutStoriesInput } from "./AiInteractionCreateNestedManyWithoutStoriesInput";

export type StoryCreateInput = {
  title?: string | null;
  summary?: string | null;
  author?: string | null;
  pages?: PageCreateNestedManyWithoutStoriesInput;
  choices?: ChoiceCreateNestedManyWithoutStoriesInput;
  aiInteractions?: AiInteractionCreateNestedManyWithoutStoriesInput;
};
