/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Story } from "./Story";
import { StoryCountArgs } from "./StoryCountArgs";
import { StoryFindManyArgs } from "./StoryFindManyArgs";
import { StoryFindUniqueArgs } from "./StoryFindUniqueArgs";
import { CreateStoryArgs } from "./CreateStoryArgs";
import { UpdateStoryArgs } from "./UpdateStoryArgs";
import { DeleteStoryArgs } from "./DeleteStoryArgs";
import { PageFindManyArgs } from "../../page/base/PageFindManyArgs";
import { Page } from "../../page/base/Page";
import { ChoiceFindManyArgs } from "../../choice/base/ChoiceFindManyArgs";
import { Choice } from "../../choice/base/Choice";
import { AiInteractionFindManyArgs } from "../../aiInteraction/base/AiInteractionFindManyArgs";
import { AiInteraction } from "../../aiInteraction/base/AiInteraction";
import { StoryService } from "../story.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Story)
export class StoryResolverBase {
  constructor(
    protected readonly service: StoryService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Story",
    action: "read",
    possession: "any",
  })
  async _storiesMeta(
    @graphql.Args() args: StoryCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Story])
  @nestAccessControl.UseRoles({
    resource: "Story",
    action: "read",
    possession: "any",
  })
  async stories(@graphql.Args() args: StoryFindManyArgs): Promise<Story[]> {
    return this.service.stories(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Story, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Story",
    action: "read",
    possession: "own",
  })
  async story(
    @graphql.Args() args: StoryFindUniqueArgs
  ): Promise<Story | null> {
    const result = await this.service.story(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Story)
  @nestAccessControl.UseRoles({
    resource: "Story",
    action: "create",
    possession: "any",
  })
  async createStory(@graphql.Args() args: CreateStoryArgs): Promise<Story> {
    return await this.service.createStory({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Story)
  @nestAccessControl.UseRoles({
    resource: "Story",
    action: "update",
    possession: "any",
  })
  async updateStory(
    @graphql.Args() args: UpdateStoryArgs
  ): Promise<Story | null> {
    try {
      return await this.service.updateStory({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Story)
  @nestAccessControl.UseRoles({
    resource: "Story",
    action: "delete",
    possession: "any",
  })
  async deleteStory(
    @graphql.Args() args: DeleteStoryArgs
  ): Promise<Story | null> {
    try {
      return await this.service.deleteStory(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Page], { name: "pages" })
  @nestAccessControl.UseRoles({
    resource: "Page",
    action: "read",
    possession: "any",
  })
  async findPages(
    @graphql.Parent() parent: Story,
    @graphql.Args() args: PageFindManyArgs
  ): Promise<Page[]> {
    const results = await this.service.findPages(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Choice], { name: "choices" })
  @nestAccessControl.UseRoles({
    resource: "Choice",
    action: "read",
    possession: "any",
  })
  async findChoices(
    @graphql.Parent() parent: Story,
    @graphql.Args() args: ChoiceFindManyArgs
  ): Promise<Choice[]> {
    const results = await this.service.findChoices(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [AiInteraction], { name: "aiInteractions" })
  @nestAccessControl.UseRoles({
    resource: "AiInteraction",
    action: "read",
    possession: "any",
  })
  async findAiInteractions(
    @graphql.Parent() parent: Story,
    @graphql.Args() args: AiInteractionFindManyArgs
  ): Promise<AiInteraction[]> {
    const results = await this.service.findAiInteractions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
