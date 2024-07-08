import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { StoryTitle } from "../story/StoryTitle";
import { UserTitle } from "../user/UserTitle";

export const AiInteractionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="query" multiline source="query" />
        <TextInput label="response" multiline source="response" />
        <ReferenceInput source="story.id" reference="Story" label="story">
          <SelectInput optionText={StoryTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
