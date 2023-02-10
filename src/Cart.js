import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import './style/cart.css';

const Cart = (props) => {
    const [total, setTotal] = useState(0);
    const {items} = props;

    useEffect(() => {
        const updateTotal = () => {
            let sum = 0;
            for (let val of items.values()) {
                sum += val[0] * val[1];
            }
            sum.toFixed(2);
            setTotal(sum);
        }
        updateTotal();
    }, [total, items]);

    return (
        <div className="cart">
            <Header size={ props.items.size }/>
            <div className="cart-items" >
                { items.forEach((value,key) => {
                    console.log(key);
                    return (
                        <div>
                            <h1>{key}</h1>
                        </div>
                    );
                })}
            </div>
            <div id="checkout">
                <h3 id="total-price">TOTAL: { total }</h3>
                <button id="checkout-btn">CHECKOUT!</button>
            </div>
        </div>
    )
}

export default Cart;