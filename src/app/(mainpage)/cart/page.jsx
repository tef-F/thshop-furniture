import "./pageCart.css";

const CartPage = () => {
    return (
        <div className="cart-page-container cart-page">
            <table>
                <tbody>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                    <tr>
                        <td>
                            <div className="cart-info">
                                <img src="/products/1.png" alt="cart img" />
                                <div>
                                    <p>Small Chair</p>
                                    <small>Price: $50.00</small>
                                    <button>Remove</button>
                                </div>
                            </div>
                        </td>
                        <td><input type="number" defaultValue="1" /></td>
                        <td>$50.00</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="cart-info">
                                <img src="/products/2.png" alt="cart img" />
                                <div>
                                    <p>Small Chair</p>
                                    <small>Price: $65.00</small>
                                    <button>Remove</button>
                                </div>
                            </div>
                        </td>
                        <td><input type="number" defaultValue="1" /></td>
                        <td>$50.00</td>
                    </tr>
                    <tr>
                        <td>
                            <div className="cart-info">
                                <img src="/products/3.png" alt="cart img" />
                                <div>
                                    <p>Small Chair</p>
                                    <small>Price: $70.00</small>
                                    <button>Remove</button>
                                </div>
                            </div>
                        </td>
                        <td><input type="number" defaultValue="1" /></td>
                        <td>$50.00</td>
                    </tr>
                </tbody>
            </table>

            <div className="cart-total-price">
                <table>
                    <tbody>
                        <tr>
                            <td>Subtotal</td>
                            <td>$200.00</td>
                        </tr><tr>
                            <td>Tax</td>
                            <td>$30.00</td>
                        </tr><tr>
                            <td>Total</td>
                            <td>$230.00</td>
                        </tr>
                        <tr>
                            <th colSpan="2">Thanh toán</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CartPage;