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

export const PageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <TextInput label="imageUrl" source="imageUrl" />
        <ReferenceInput source="story.id" reference="Story" label="story">
          <SelectInput optionText={StoryTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
