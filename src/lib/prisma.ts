import {PrismaClient} from '@prisma/client'
import { Return } from '@prisma/client/runtime/library';

const prismaClientSingleton = () =>{
    return new PrismaClient();
}

declare global {
    var prismaGlobal: undefined | ReturnType <typeof prismaClientSingleton>;
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;