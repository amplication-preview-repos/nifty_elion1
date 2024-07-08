import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AiInteractionModuleBase } from "./base/aiInteraction.module.base";
import { AiInteractionService } from "./aiInteraction.service";
import { AiInteractionController } from "./aiInteraction.controller";
import { AiInteractionResolver } from "./aiInteraction.resolver";

@Module({
  imports: [AiInteractionModuleBase, forwardRef(() => AuthModule)],
  controllers: [AiInteractionController],
  providers: [AiInteractionService, AiInteractionResolver],
  exports: [AiInteractionService],
})
export class AiInteractionModule {}
