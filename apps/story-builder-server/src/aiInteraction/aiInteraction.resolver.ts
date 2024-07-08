import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AiInteractionResolverBase } from "./base/aiInteraction.resolver.base";
import { AiInteraction } from "./base/AiInteraction";
import { AiInteractionService } from "./aiInteraction.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AiInteraction)
export class AiInteractionResolver extends AiInteractionResolverBase {
  constructor(
    protected readonly service: AiInteractionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
