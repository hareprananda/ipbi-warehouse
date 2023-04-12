import { PrismaService } from '../prisma.service';

export type PrismaTrxService = Omit<PrismaService, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>;
