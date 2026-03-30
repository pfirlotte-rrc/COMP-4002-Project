import { useEffect, useState } from "react";
import { FrontendCategory as Category } from "@shared/types/frontend-category";
import * as CategoryService from "../services/categoryService"

export function useCategories() {
    const [categories, updateCategories] = useState<Category[]>([]);
    const [error, setError] = useState<string | null>(null);

    const fetchCategories = async () => {
        try {
            let result = await CategoryService.categoryService.getAllCategories();
            updateCategories([...result]);
        } catch (errorObject) {
            setError(`${errorObject}`);
        }
    }

    const createNewCategory = async (categoryName: string) => {
        try {
            await CategoryService.categoryService.createNewCategory(categoryName);
            await fetchCategories();
        } catch (errorObject) {
            setError(`${errorObject}`);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    return { categories, error, updateCategories, fetchCategories, createNewCategory}
}