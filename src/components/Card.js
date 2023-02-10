import React from "react";

const Card = (props) => {
    return (
        <div className="card" onClick={ props.onClick } id = { props.id } price = { props.price }>
            <img src = { props.imgLink} alt = { props.altAttribute } className="game-img"></img>
            <h3>{props.altAttribute.toUpperCase()}</h3>
            <h3> { props.price } </h3>
        </div>
    )
}

export default Card;