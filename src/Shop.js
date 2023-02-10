import React from "react";
import Header from "./components/Header";
import Page from "./components/Page";
import './style/shop.css';

const Shop = (props) => {
    return (
        <div className="shop">
            <Header size={ props.items.size }/>
            <Page/>
        </div>
    )
}

export default Shop;