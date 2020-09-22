import React from 'react';

const CartItem = (props) => {

        // Object Restructuring
        const { price, title, qty } = props.product;
        const { 
            product, 
            onIncreaseQuantity, 
            onDecreaseQuantity, 
            onDeleteProduct } = props;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} src={product.img} />
                </div>
                <div className="right-block">
                    <div style={ { fontSize: 25 } }>{title}</div>
                    <div style={ { color: "grey" } }>Rs. {price}</div>
                    <div style={ { color: "grey" } }>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/*Buttons*/}
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://www.flaticon.com/svg/static/icons/svg/992/992651.svg"
                            //  Method to pass the value to the function 
                            //  onClick={this.increaseQuantity.bind(this)}
                            //  onClick={() => this.props.onIncreaseQuantity(this.props.product)}
                            onClick={() => onIncreaseQuantity(product)}    
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://www.flaticon.com/svg/static/icons/svg/659/659892.svg" 
                            onClick = {() => onDecreaseQuantity(product)}
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://www.flaticon.com/svg/static/icons/svg/1214/1214428.svg" 
                            onClick = {() => onDeleteProduct(product.id)}
                        />
                    </div>
                </div>
            </div>
        );
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;