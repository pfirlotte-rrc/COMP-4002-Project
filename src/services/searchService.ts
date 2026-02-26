export function validateSearch(searchValue: string): {
    isValid: boolean;
    errors: string[];
} {
    let isValid = true;
    let errors: string[] = [];

    if (searchValue.trim().length < 3) {
        isValid = false;
        errors.push("Search term must be at least 3 characters.");
    }

    return {isValid, errors};
}