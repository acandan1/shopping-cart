import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GamesData } from "../data/GamesData";
import Header from "./Header";

const GameDisplay = (props) => {
    const navigate = useNavigate();
    const { id } = useParams();
    let pro = '';
    GamesData.forEach(game => {
        if(game.id === id) { pro = game; }
    });

    const addGameToItems = () => {
        props.itemsUpdater(pro.altAttribute.toUpperCase(), +pro.price.slice(1));
        navigate('/cart');
    }

    return (
        <div className="product">
            <Header size={ props.items.size }/>
            <div className="info">
                <h1 className="product-title">{pro.altAttribute.toUpperCase()}</h1>
                <img className="product-image" src={ pro.imgLink } alt={ pro.altAttribute }/>
                <h1 className="product-price">{pro.price}</h1>
                <button id="add-cart" onClick={ addGameToItems }>Add to Cart!</button>
            </div>
        </div>
    );
}

export default GameDisplay;