import { useState } from "react";
import { validateSearch } from "../../../services/searchService";

interface UseSearchReturn {
    searchValue: string;
    setSearchValue: (value: string) => void;
    errors: string[];
    isValid: boolean;
    handleSearchChange: (value: string) => void;
}

export function useSearch(): UseSearchReturn {
    const [searchValue, setSearchValue] = useState("");
    const [errors, setErrors] = useState<string[]>([]);
    const [isValid, setIsValid] = useState(true);

    function handleSearchChange(value: string) {
        setSearchValue(value);

        const validation = validateSearch(value);

        setErrors(validation.errors);
        setIsValid(validation.isValid);
    }

    return {
        searchValue,
        setSearchValue,
        errors,
        isValid,
        handleSearchChange,
    };
}