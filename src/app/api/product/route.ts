import { NextResponse,NextRequest } from 'next/server';
import { prisma } from '@/utils/connnect';

export const GET = async () => {

    try {
        const sub_products = await prisma.product.findMany();
        return new NextResponse(
            JSON.stringify(sub_products),
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