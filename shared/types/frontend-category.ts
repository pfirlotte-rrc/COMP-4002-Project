export interface FrontendCategory {
    categoryId: number,
    categoryName: string,
    userId?: string | null;  
    createdAt: string,
    updatedAt: string,
}

export type NewCategory = Pick<FrontendCategory, "categoryName">;