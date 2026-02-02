import React from 'react';
import type { ChangeEvent } from 'react';

interface TextInputFormProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>; 
}

const SearchBar: React.FC<TextInputFormProps> = ({ name, setName }) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value); 
  };

  return (
    <div>
      <label htmlFor="search">Search by Category: </label>
      <input
        type="text"
        id="search"
        value={name}  
        onChange={handleInputChange}  
        placeholder="Enter category"
      />
    </div>
  );
};

export default SearchBar;
