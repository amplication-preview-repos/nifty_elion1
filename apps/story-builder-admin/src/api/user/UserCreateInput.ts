import { InputJsonValue } from "../../types";
import { AiInteractionCreateNestedManyWithoutUsersInput } from "./AiInteractionCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  aiInteractions?: AiInteractionCreateNestedManyWithoutUsersInput;
};
