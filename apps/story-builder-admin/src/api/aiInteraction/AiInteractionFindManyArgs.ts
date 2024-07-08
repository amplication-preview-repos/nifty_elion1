import { AiInteractionWhereInput } from "./AiInteractionWhereInput";
import { AiInteractionOrderByInput } from "./AiInteractionOrderByInput";

export type AiInteractionFindManyArgs = {
  where?: AiInteractionWhereInput;
  orderBy?: Array<AiInteractionOrderByInput>;
  skip?: number;
  take?: number;
};
