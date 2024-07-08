import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AiInteractionServiceBase } from "./base/aiInteraction.service.base";

@Injectable()
export class AiInteractionService extends AiInteractionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
