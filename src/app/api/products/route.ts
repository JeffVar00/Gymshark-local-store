import { NextResponse,NextRequest } from 'next/server';
import { prisma } from '@/utils/connnect';

export const GET = async (req: NextRequest) => {
    const { searchParams } = new URL(req.url)
    const cat = searchParams.get('cat')

    try {
        const products = await prisma.ParentProduct.findMany({
            where: {
                ... (cat ? { categorySlug: cat } : { isFeatured: true }),
            },
            ... (cat ? {} : { take: 10 }),
        });
        return new NextResponse(
            JSON.stringify(products),
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