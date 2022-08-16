import React from "react";

import Appheader from "../app-header";
import SearchPanel from "../search-panel/search-panel";

const App = () => {
    return (
        <div className="app">
            <Appheader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
            </div>
        </div>
    )
}

export default App;