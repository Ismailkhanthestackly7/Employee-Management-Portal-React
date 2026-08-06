function SearchBar({ searchText, setSearchText }) {
  return (
    <input
      type="text"
      className="form-control mb-3"
      placeholder="🔍 Search Employee by Name..."
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
    />
  );
}

export default SearchBar;