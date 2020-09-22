import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
        products: [
            {
                price: 99,
                title: 'Watch',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
                id: 1
            },
            {
                price: 999,
                title: 'Phone',
                qty: 10,
                img: 'https://images.unsplash.com/photo-1535994906991-cf7bc72177e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80',
                id: 2
            },
            {
                price: 777,
                title: 'Laptop',
                qty: 4,
                img: 'https://images.unsplash.com/photo-1542393545-10f5cde2c810?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80',
                id: 3
            }
        ]
    }

    /*Another method to pass the values to the function */
    // this.increaseQuantity = this.increaseQuantity.bind(this);
  }

  handleIncreaseQuantity = (product) => {
      console.log('Hey please inc the qty of ', product);
      const { products } = this.state;
      const index = products.indexOf(product);

      products[index].qty+=1;

      this.setState({
        // products: products
        products
      })
  }

  handleDecreaseQuantity = (product) => {
      console.log('Hey please dec the qty of ', product);
      const { products } = this.state;
      const index = products.indexOf(product);

      if(products[index].qty === 0)
      {
          return;
      }
      products[index].qty-=1;

      this.setState({
        // products: products
        products
      })
  }

  handleDeleteProduct = (id) => {
      const { products } = this.state;

      const items = products.filter((item) => item.id !== id); // Returns items whose id is not equal to the id that is passed in the function

      this.setState({
          products: items
      })
  }

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })
    return count;
  }

  getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0;

    products.map((product) => {
      if(product.qty > 0) {
        cartTotal = cartTotal + product.qty * product.price
      }
      return '';
    });

    return cartTotal;
  }

  render () {

    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={ { padding: 10, fontSize: 20}}>TOTAL: {this.getCartTotal()} </div>
      </div>
    );
  }
}

export default App;
