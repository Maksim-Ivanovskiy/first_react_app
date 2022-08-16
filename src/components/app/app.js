import React from "react";

import Appheader from "../app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilte from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import './app.css';

const App = () => {
    return (
        <div className="app">
            <Appheader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilte/>
            </div>
            <PostList/>
            <PostAddForm/>
        </div>
    )
}

export default App;