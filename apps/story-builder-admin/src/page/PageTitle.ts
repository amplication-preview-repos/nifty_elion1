import { Page as TPage } from "../api/page/Page";

export const PAGE_TITLE_FIELD = "imageUrl";

export const PageTitle = (record: TPage): string => {
  return record.imageUrl?.toString() || String(record.id);
};
