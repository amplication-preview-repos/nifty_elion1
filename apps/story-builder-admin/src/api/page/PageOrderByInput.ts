import { SortOrder } from "../../util/SortOrder";

export type PageOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  content?: SortOrder;
  imageUrl?: SortOrder;
  storyId?: SortOrder;
};
