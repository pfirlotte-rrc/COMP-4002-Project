import { FrontendCategory as Category, NewCategory } from "@shared/types/frontend-category"
// import category definition from monorepo root
// "@" path alias defined in tsconfig.base.json

type CategoriesResponseJSON = {message: string, data: Category[]};
type CategoryResponseJSON = {message: string, data: Category};

// Base url for backend
// Vite provides this value from the .env file rather than dotenv package
const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1`;
const CATEGORY_ENDPOINT = "/categories"


export async function fetchCategories(): Promise<Category[]> {

    const categoryResponse: Response = await fetch(
        `${BASE_URL}${CATEGORY_ENDPOINT}`
    );

    if(!categoryResponse.ok) {
        throw new Error("Failed to fetch categories");
    }

    const json: CategoriesResponseJSON = await categoryResponse.json();
    return json.data;
}


export async function addNewCategory(category: NewCategory): Promise<Category> {

    const updateResponse: Response = await fetch(
        `${BASE_URL}${CATEGORY_ENDPOINT}`,
        {
            method: "POST",
            body: JSON.stringify({...category}),
            headers: {
                "Content-Type": "application/json",
            }
        }
    );

    if(!updateResponse.ok) {
        throw new Error("Failed to create category");
    }

    const json: CategoryResponseJSON = await updateResponse.json();
    return json.data;
}
