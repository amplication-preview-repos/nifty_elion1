import { SortOrder } from "../../util/SortOrder";

export type AiInteractionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  query?: SortOrder;
  response?: SortOrder;
  storyId?: SortOrder;
  userId?: SortOrder;
};
