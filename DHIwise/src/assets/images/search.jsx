import React, { useState } from "react";
import SearchSVG from "./SearchSVG";

function SearchPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        // Fetch the search results from the API.
        const { api } = useContext(AppContext);
        api.getSearchResults(searchTerm).then((results) => {
            // Set the search results state.
            setSearchResults(results);
        });
    };

    return (
        <div>
            <h1>Search</h1>
            <input
                type="text"
                placeholder="Enter search term"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            <ul>
                {searchResults.map((result) => (
                    <li key={result.id}>{result.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default SearchPage;
