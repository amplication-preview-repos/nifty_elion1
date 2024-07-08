import { AiInteraction as TAiInteraction } from "../api/aiInteraction/AiInteraction";

export const AIINTERACTION_TITLE_FIELD = "id";

export const AiInteractionTitle = (record: TAiInteraction): string => {
  return record.id?.toString() || String(record.id);
};
