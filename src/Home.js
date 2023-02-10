import React from "react";
import Header from "./components/Header";
import './style/home.css';

const Home = (props) => {
    return (
        <div className="home">
            <Header size={ props.items.size }/>
        </div>
    )
}

export default Home;