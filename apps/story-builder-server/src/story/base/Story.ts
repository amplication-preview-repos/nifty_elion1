/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsDate,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { Page } from "../../page/base/Page";
import { Choice } from "../../choice/base/Choice";
import { AiInteraction } from "../../aiInteraction/base/AiInteraction";

@ObjectType()
class Story {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  summary!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  author!: string | null;

  @ApiProperty({
    required: false,
    type: () => [Page],
  })
  @ValidateNested()
  @Type(() => Page)
  @IsOptional()
  pages?: Array<Page>;

  @ApiProperty({
    required: false,
    type: () => [Choice],
  })
  @ValidateNested()
  @Type(() => Choice)
  @IsOptional()
  choices?: Array<Choice>;

  @ApiProperty({
    required: false,
    type: () => [AiInteraction],
  })
  @ValidateNested()
  @Type(() => AiInteraction)
  @IsOptional()
  aiInteractions?: Array<AiInteraction>;
}

export { Story as Story };
