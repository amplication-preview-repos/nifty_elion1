import { SortOrder } from "../../util/SortOrder";

export type ChoiceOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  nextPage?: SortOrder;
  storyId?: SortOrder;
};
