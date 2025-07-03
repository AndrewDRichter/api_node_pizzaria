import prismaClient from "../../prisma";

interface ProductCategoryRequest {
    category_id: string;
}

class ListByCategoryService {
    async execute({ category_id }: ProductCategoryRequest) {

        // console.log(category_id)
        const findByCategory = await prismaClient.product.findMany({
            where: {
                category_id: category_id ? category_id : '',
            },
            select: {
                id: true,
                name: true,
                price: true,
                banner: true,
                category_id: true
            }
        })

        return findByCategory;
    }
}

export { ListByCategoryService };