import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const GET = async () => {
    try {

        const categories = await prisma.category.findMany()
        return new NextResponse(
            JSON.stringify(categories),
            { status: 200 }
        );

    } catch (error : any) {
        return new NextResponse(
            JSON.stringify({ error: error.message }),
            { status: 500 }
        );
    }
}

export const POST = async () => {
    return new NextResponse("Hello", {status: 200});
}