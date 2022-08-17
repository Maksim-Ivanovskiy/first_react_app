import React from "react";

import Appheader from "../app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilte from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";
import styled from 'styled-components';


import './app.css';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`

const App = () => {

    const data = [
        {label: 'Going to learn React', important: true, id: 'asdf'}, 
        {label: 'That is so good', important: false, id: 'qwer'},
        {label: 'I need a break...', important: false, id: 'zxcv'}

    ];

    return (
        <AppBlock>
            <Appheader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilte/>
            </div>
            <PostList posts={data} />
            <PostAddForm/>
        </AppBlock>
    )
}

export default App;