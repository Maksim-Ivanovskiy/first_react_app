import React from "react";
import './app-header.css'
import styled from "styled-components";

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
        :hover {
            color: blue
        }
        cursor: pointer;
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`

const Appheader = ({liked, allPosts}) => {
    return (
        <Header>
            <h1>Maxim Ivanovskiy</h1>
            <h2>{allPosts} записей, из них понравилось {liked}</h2>
        </Header>
    )
}

export default Appheader;