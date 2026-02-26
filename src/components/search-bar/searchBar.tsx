import React from 'react';
import type { ChangeEvent } from 'react';

interface TextInputFormProps {
  name: string;
  onChange: (text: string) => void;
  messages?: string[];
  hideLabel?: boolean;
}

const SearchBar: React.FC<TextInputFormProps> = ({name, onChange, messages, hideLabel}) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div>
      {!hideLabel && <label htmlFor="search">Search by Category: </label>}
      <input
        type="text"
        id="search"
        value={name}  
        onChange={handleInputChange}  
        placeholder="Search..."
      />
      {messages && messages.length > 0 && (
      <div style={{color: 'red'}}>
        {messages.map((message, typeError) => (
          <div key={typeError}>{message}</div>
        ))}
      </div>
      )}
    </div>
  );
};

export default SearchBar;