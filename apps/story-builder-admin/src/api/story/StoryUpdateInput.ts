import { PageUpdateManyWithoutStoriesInput } from "./PageUpdateManyWithoutStoriesInput";
import { ChoiceUpdateManyWithoutStoriesInput } from "./ChoiceUpdateManyWithoutStoriesInput";
import { AiInteractionUpdateManyWithoutStoriesInput } from "./AiInteractionUpdateManyWithoutStoriesInput";

export type StoryUpdateInput = {
  title?: string | null;
  summary?: string | null;
  author?: string | null;
  pages?: PageUpdateManyWithoutStoriesInput;
  choices?: ChoiceUpdateManyWithoutStoriesInput;
  aiInteractions?: AiInteractionUpdateManyWithoutStoriesInput;
};
