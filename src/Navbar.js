import React from 'react';

const Navbar = (props) => {
       
        return (
            <div style={styles.nav}>
                <div style={styles.navLogo}>
                    <p style={{padding: 0, margin: 0}}>React Cart</p>
                </div>
                <div style={styles.cartIconContainer}>
                    {/* <img style={ styles.cartIcon } src="https://www.flaticon.com/svg/static/icons/svg/1170/1170678.svg" alt="cart-icon" /> */}
                    <i className="fa fa-shopping-cart" style={ styles.cartIcon }></i>
                    <span style={styles.cartCount}>{ props.count } </span>
                </div>
            </div>
        );
}

const styles = {
    cartIcon: {
        height: 50,
        width: 27,
        marginRight: 20,
        color: 'white'
    },
    nav: {
        height: 70,
        background: 'black',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0px 15px'
    },
    navLogo: {
        width: 'max-content',
        fontSize: '1.7rem',
        color: 'yellow',
        fontWeight: 600
    },
    cartIconContainer: {
        position: 'relative'
    },
    cartCount: {
        background: 'yellow',
        borderRadius: '50%',
        padding: '0px 6px',
        position: 'absolute',
        right: 7,
        top: 0
    }
};

export default Navbar;