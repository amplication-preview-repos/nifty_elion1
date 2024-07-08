/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PageListRelationFilter } from "../../page/base/PageListRelationFilter";
import { ChoiceListRelationFilter } from "../../choice/base/ChoiceListRelationFilter";
import { AiInteractionListRelationFilter } from "../../aiInteraction/base/AiInteractionListRelationFilter";

@InputType()
class StoryWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  title?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  summary?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  author?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => PageListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PageListRelationFilter)
  @IsOptional()
  @Field(() => PageListRelationFilter, {
    nullable: true,
  })
  pages?: PageListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ChoiceListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ChoiceListRelationFilter)
  @IsOptional()
  @Field(() => ChoiceListRelationFilter, {
    nullable: true,
  })
  choices?: ChoiceListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => AiInteractionListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AiInteractionListRelationFilter)
  @IsOptional()
  @Field(() => AiInteractionListRelationFilter, {
    nullable: true,
  })
  aiInteractions?: AiInteractionListRelationFilter;
}

export { StoryWhereInput as StoryWhereInput };
