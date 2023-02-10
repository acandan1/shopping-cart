import Home from "./Home";
import Shop from "./Shop";
import Cart from "./Cart";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GameDisplay from "./components/GameDisplay";

const RouteSwitch = (props) => {
    const [items, setItems] = useState(new Map());

    const itemsUpdater = (id, price, amount=1) => {
        setItems(new Map(items.set(id, [amount, price])));
        console.log(items);
    };

    const removeItem = (id) => {
        const updatedMap = items;
        updatedMap.delete(id);
        setItems(new Map(updatedMap));
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element = { <Home items = {items}/> }/>
                <Route path="/shop">
                    <Route index element= { <Shop items = {items}/> }/>
                    <Route path=":id" element= { <GameDisplay itemsUpdater={ itemsUpdater } items = {items}/> }/>
                </Route>
                <Route path="/cart" element = { <Cart items={ items } itemsUpdater = { itemsUpdater } removeItem = { removeItem }/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;