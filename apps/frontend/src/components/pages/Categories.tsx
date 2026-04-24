import { useState } from "react";
import { useCategories } from "../../hooks/useCategories";
import { categoryService } from "../../services/categoryService";
import { SignedOut, SignedIn, useAuth } from "@clerk/clerk-react";

function CategoriesPage() {
    const { categories, createNewCategory } = useCategories();
    const { userId } = useAuth();

    const [inputValue, setInputValue] = useState("");
    const [inputError, setInputError] = useState<string | null>(null);

    const myCreatedCategories = categories.filter((cat) => cat.userId === userId);
    const otherCategories = categories.filter((cat) => cat.userId !== userId);

    const handleInputChange = (value: string) => {
        setInputValue(value);
        if (inputError) setInputError(null);
    };

    const handleAdd = async (e: React.FormEvent) => {
        e.preventDefault();

        const validation = categoryService.validate(inputValue);
        if (!validation.isValid) {
            setInputError(validation.error);
            return;
        }

        await createNewCategory(inputValue);
        setInputValue("");
        setInputError(null);
    };
    
    return (
        <div className="categories-page">
            <header>
                <h1>Article Categories</h1>
            </header>

            <SignedOut>
                <h2>All Categories</h2>
                <ul>
                    {categories.map((cat) => (
                        <li key={cat.categoryId}>
                            <span>{cat.categoryName}</span>
                        </li>
                    ))}
                </ul>
            </SignedOut>
            <SignedIn>
                <h2>My Created Categories</h2>
                <ul>
                    {myCreatedCategories.map((cat) => (
                        <li key={cat.categoryId}>
                            <span>{cat.categoryName}</span>
                        </li>
                    ))}
                </ul>

                <h2>Other Categories</h2>
                <ul>
                    {otherCategories.map((cat) => (
                        <li key={cat.categoryId}>
                            <span>{cat.categoryName}</span>
                        </li>
                    ))}
                </ul>
                
                <h2>Add New Category</h2>
                <form onSubmit={handleAdd}>
                    <div className="category-add-form">
                        <input
                            type="text"
                            placeholder="New category name..."
                            value={inputValue}
                            onChange={(e) => handleInputChange(e.target.value)}
                            className={inputError ? "input-error" : ""}
                        />
                        {inputError && <span className="error-msg">{inputError}</span>}
                    </div>
                    <button type="submit">Add Category</button>
                </form>
            </SignedIn>
        </div>
    );
}

export default CategoriesPage;