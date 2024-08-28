import { NextResponse,NextRequest } from 'next/server';
import { prisma } from '@/utils/connnect';

export const GET = async (req: NextRequest) => {
    const { searchParams } = new URL(req.url)
    const cat = searchParams.get('cat')

    try {
        const sub_categories = await prisma.SubCategory.findMany({
            where: {
                ... (cat ? { categorySlug: cat } : { isFeatured: true }),
            },
            ... (cat ? {} : { take: 5 }),
        });
        return new NextResponse(
            JSON.stringify(sub_categories),
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