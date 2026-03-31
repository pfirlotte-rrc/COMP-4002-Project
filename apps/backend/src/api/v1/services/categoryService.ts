// Use the category type defined in prisma/schema.prisma
import { Category } from "@prisma/client";
import prisma from "prisma/client";
// initialize a prisma client if not already and use in queries here

/**
 * Services access data as necessary from the Prisma client. They invoke
 * methods on the ORM, which will send queries to the database and respond
 * with data needed.
 * 
 * More general info on Prisma: https://www.prisma.io/docs/orm/overview/prisma-in-your-stack/rest
 */
export const fetchAllCategories = async(): Promise<Category[]> => {
    // get all records in the category table
    return (await prisma.category.findMany({
        orderBy: {
            categoryName: "asc"
        }
    }));
}

export const createNewCategory = async(categoryData: {
    categoryId: number,
    categoryName: string
}): Promise<Category> => {
    // create a new category with categoryData as its column values, except for isFavourite as false
    const newCategory: Category = await prisma.category.create({
        data: {
            ...categoryData
        }
    });

    return newCategory;
}
