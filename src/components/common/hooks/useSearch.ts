import { useState } from "react";
import { validateSearch } from "../../../services/searchService";

interface UseSearchReturn {
  searchTerm: string;
  searchMessages: string[];
  isValid: boolean;
  handleSearchChange: (value: string) => void;
}

export function useSearch(): UseSearchReturn {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchMessages, setSearchMessages] = useState<string[]>([]);
  const [isValid, setIsValid] = useState<boolean>(true);

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);

    const validation = validateSearch(value);

    if (value.trim().length > 0 && !validation.isValid) {
      setSearchMessages(validation.errors);
    } else {
      setSearchMessages([]);
    }

    setIsValid(validation.isValid);
  };

  return {
    searchTerm,
    searchMessages,
    isValid,
    handleSearchChange,
  };
}