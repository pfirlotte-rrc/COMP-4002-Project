export interface FrontendCategory {
    categoryId: number,
    categoryName: string,
    createdAt: string,
    updatedAt: string,
}

export type NewCategory = Pick<FrontendCategory, "categoryName">;