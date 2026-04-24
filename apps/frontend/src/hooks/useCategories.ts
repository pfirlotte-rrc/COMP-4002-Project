import { useEffect, useState } from "react";
import { FrontendCategory as Category } from "@shared/types/frontend-category";
import * as CategoryService from "../services/categoryService"
import { useAuth } from "@clerk/clerk-react";

export function useCategories() {
    const {getToken, isSignedIn} = useAuth();
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
            let sessionToken = isSignedIn? await getToken() : null;
            await CategoryService.categoryService.createNewCategory(categoryName, sessionToken);
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