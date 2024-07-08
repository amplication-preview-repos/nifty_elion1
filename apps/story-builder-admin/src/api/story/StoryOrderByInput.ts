import { SortOrder } from "../../util/SortOrder";

export type StoryOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  summary?: SortOrder;
  author?: SortOrder;
};
