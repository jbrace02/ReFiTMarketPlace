import React, { useState } from "react";
import Routes from "./Routes";

function App() {
    const [page, setPage] = useState("home");

    const handleNavigation = (targetPage) => (event) => {
        event.preventDefault();
        setPage(targetPage);
    };

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <button onClick={handleNavigation("home")} className="link-button">Home</button>
                    </li>
                    <li>
                        <button onClick={handleNavigation("search")} className="link-button">Search</button>
                    </li>
                    <li>
                        <button onClick={handleNavigation("more")} className="link-button">More</button>
                    </li>
                </ul>
            </nav>
            <Routes page={page} />
        </div>
    );
}

export default App;
