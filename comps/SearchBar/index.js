const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search Movies</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search by title, casts, and director"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
);

export default SearchBar;