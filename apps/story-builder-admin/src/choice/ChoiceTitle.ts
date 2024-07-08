import { Choice as TChoice } from "../api/choice/Choice";

export const CHOICE_TITLE_FIELD = "nextPage";

export const ChoiceTitle = (record: TChoice): string => {
  return record.nextPage?.toString() || String(record.id);
};
