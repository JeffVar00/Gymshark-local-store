import { NextResponse,NextRequest } from 'next/server';
import { prisma } from '@/utils/connnect';

export const GET = async (req: NextRequest) => {
    const { searchParams } = new URL(req.url)
    const cat = searchParams.get('cat')
    const search = searchParams.get('search')
    const page = searchParams.get('page')
    const pageSize = searchParams.get('pageSize')

    const validPage: number = isNaN(parseInt(page || '1', 10)) ? 1 : parseInt(page || '1', 10);
    const validPageSize: number = isNaN(parseInt(pageSize || '50', 10)) ? 50 : parseInt(pageSize || '50', 10);

    try {

        const where_condition = {
            ...(search ? {
                    title: { contains: search },
                    categorySlug: { contains: search }
                } : {}),
            ...(cat ? {
                OR: [
                    { categorySlug: cat },
                    { subCategorySlug: cat }
                ]
                } : { isFeatured: true }),
        }

        const countArgs = {
            where: where_condition
        };

        const queryArgs = {
            where: where_condition,
            take: cat || search ? validPageSize : 10,
            skip: (validPage - 1) * validPageSize
        };

        const totalCount = await prisma.product.count(countArgs);
        const products = await prisma.product.findMany(queryArgs);

        const totalPages = Math.ceil(totalCount / validPageSize);
        
        return new NextResponse(
            JSON.stringify({
                products: products,
                pagination: {
                    currentPage: validPage,
                    total: totalPages,
                    maxResults:  validPageSize
                },
                total: totalCount,
            }),
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