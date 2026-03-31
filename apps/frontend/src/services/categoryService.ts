import { fetchCategories, addNewCategory } from "../apis/categoryRepo";
import { FrontendCategory  as Category } from "@shared/types/frontend-category";

export type CategoryValidation = {
    isValid: boolean;
    error: string | null;
};

export const categoryService = {
    getAllCategories():Promise<Category[]> {
        return fetchCategories();
    },

    validate(categoryName: string): CategoryValidation {
        if (categoryName.trim().length === 0)
            return { isValid: false, error: "Category name cannot be empty." };

        return { isValid: true, error: null };
    },

    createNewCategory(categoryName: string): Promise<Category> {
        return addNewCategory({ categoryName: categoryName.trim() });
    },
};