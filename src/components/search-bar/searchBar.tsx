import './SearchBar.css';  

export function SearchBar({
  searchValue,
  messages,
  handleSearchChange,
  handleSubmit,
}: {
  searchValue: string;
  messages: string[];
  handleSearchChange: (newValue: string) => void;
  handleSubmit: () => void;
}) {
  return (
    <form className="search-form" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>

      <input
        type="text"
        name="field-term"
        placeholder="Enter a category"
        value={searchValue}
        onChange={(e) => handleSearchChange(e.target.value)}  
        className="search-input"
      />
      
      
      {messages?.map((message, index) => (
        <div className="error" key={index}>
          {message}
        </div>
      ))}

    
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
}
