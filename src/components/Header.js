import "../style/header.css"
import cartLogo from '../media/cart.svg'
import { useNavigate } from "react-router-dom";

const Header = (props) => {
    const navigate = useNavigate();

    return (

        <nav className="header">
            <div onClick={ () => { navigate('/') } }>GAME GALAXY</div> |
            <div onClick={ () => { navigate('/shop') } }>SHOP</div> |
            <div onClick={ () => { navigate('/cart') } } id="cart-bar">
                <img src= { cartLogo } alt="cart" id="cart-logo"/>
                <h1 id="item-count">{ props.size }</h1>
            </div>
        </nav>
    )
}

export default Header;