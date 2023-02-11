import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import './style/cart.css';

const Cart = (props) => {
    const [total, setTotal] = useState(0);
    const {items} = props;
    const keys = [...items.keys()];

    useEffect(() => {
        const updateTotal = () => {
            let sum = 0;
            for (let val of items.values()) {
                sum += val[0] * val[1];
            }
            sum.toFixed(2);
            setTotal(sum.toFixed(2));
        }
        updateTotal();
    }, [total, items]);

    const incrementItem = (id, amount, price, img) => {
        if (amount <= 9) {
            props.itemsUpdater(id, price, img, amount+1);
        }
    };

    const decrementItem = (id, amount, price, img) => {
        if (amount >= 2) {
            props.itemsUpdater(id, price, img, amount-1);
        }
    };

    return (
        <div className="cart">
            <Header size={ props.items.size }/>
            <div className="cart-items" >
                { keys.map((key) => {
                    const val = items.get(key);
                    return (
                        <div className="cart-item" key={key}>
                            <img className="cart-img" src= {val[2]} alt = {key}/>
                            <h1>{key}</h1>
                            <h1>{`$${val[1]}`}</h1>
                            <div className="wrapper">
                                <span className="minus" onClick={ () => { decrementItem(key, val[0], val[1], val[2])} }>-</span>
                                <span className="num">{`${val[0]}`}</span>
                                <span className="plus" onClick={ () => { incrementItem(key, val[0], val[1], val[2])} }>+</span>
                            </div>
                            <button className="delete" onClick={ () => {props.removeItem(key)} }>Delete</button>
                        </div>
                    );
                })}
            </div>
            <div id="checkout">
                <h3 id="total-price">TOTAL: { `$${total}` }</h3>
                <button id="checkout-btn">CHECKOUT!</button>
            </div>
        </div>
    )
}

export default Cart;