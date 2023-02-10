import React from "react";
import Card from "./Card";
import { GamesData } from "../data/GamesData";
import { useNavigate } from "react-router-dom";

const Page = (props) => {
    const navigate = useNavigate();

    return (
        <div className="games">
            { GamesData.map((game) => {
                return (
                    <Card key={ game.id }imgLink= {game.imgLink} altAttribute= { game.altAttribute }
                    id= { game.id } price= { game.price } onClick= {()=> {
                         navigate(`/shop/${game.id}`);
                        }}
                    />
                );
            })}
        </div>
    )
}

export default Page;