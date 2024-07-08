import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PageTitle } from "../page/PageTitle";
import { ChoiceTitle } from "../choice/ChoiceTitle";
import { AiInteractionTitle } from "../aiInteraction/AiInteractionTitle";

export const StoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="title" source="title" />
        <TextInput label="summary" multiline source="summary" />
        <TextInput label="author" source="author" />
        <ReferenceArrayInput
          source="pages"
          reference="Page"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PageTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="choices"
          reference="Choice"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ChoiceTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="aiInteractions"
          reference="AiInteraction"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AiInteractionTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
