import { techArticleCategories } from "../apis/categoriesData";
import type { Category } from "../apis/categoriesData";

export type NewCategory = Omit<Category, "id">;
export type { Category };

let categories: Category[] = [...techArticleCategories];
let nextId = categories.length + 1;

export const categoryRepository = {
    getAllCategories(): Category[] {
        return [...categories];
    },

    createNewCategory(newCategory: NewCategory): Category {
        const created: Category = { id: nextId++, ...newCategory };
        categories = [...categories, created];
        return created;
    },
};