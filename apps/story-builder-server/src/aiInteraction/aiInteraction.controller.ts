import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AiInteractionService } from "./aiInteraction.service";
import { AiInteractionControllerBase } from "./base/aiInteraction.controller.base";

@swagger.ApiTags("aiInteractions")
@common.Controller("aiInteractions")
export class AiInteractionController extends AiInteractionControllerBase {
  constructor(
    protected readonly service: AiInteractionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
