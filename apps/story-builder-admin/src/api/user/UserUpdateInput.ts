import { InputJsonValue } from "../../types";
import { AiInteractionUpdateManyWithoutUsersInput } from "./AiInteractionUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  aiInteractions?: AiInteractionUpdateManyWithoutUsersInput;
};
