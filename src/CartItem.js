import React from 'react';

class CartItem extends React.Component {
    
    // Arrow functions automatically bind the instance of "this" to the class
    increaseQuantity = () => {
        // console.log('this', this.state);
        
        // setState form 1
        // this.setState({
        //     qty: this.state.qty + 1
        // });

        // setState form 2 - if prevState is required, use this
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        });
    }

    decreaseQuantity = () => {
        const { qty } = this.state;

        if(qty === 0){
            return;
        }
        this.setState((prevState) => {
            return{
                qty: prevState.qty -1
            }
        });
    }
    
    render() {
        // Object Restructuring
        const {price, title, qty} = this.props.product;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
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
                            onClick={this.increaseQuantity}  
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://www.flaticon.com/svg/static/icons/svg/659/659892.svg" 
                            onClick = {this.decreaseQuantity}
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://www.flaticon.com/svg/static/icons/svg/1214/1214428.svg" 
                        />
                    </div>
                </div>
            </div>
        );
    }
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