class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      products: [
        { id: 1, name: 'Product 1', price: 10, description: 'Description of Product 1' },
        { id: 2, name: 'Product 2', price: 20, description: 'Description of Product 2' },
        { id: 3, name: 'Product 3', price: 30, description: 'Description of Product 3' },
      ],
    };
  }

  addToCart(product) {
    const { cart } = this.state;
    const productIndex = cart.findIndex(item => item.id === product.id);

    if (productIndex !== -1) {
      cart[productIndex].quantity++;
    } else {
      product.quantity = 1;
      cart.push(product);
    }

    this.setState({ cart });
  }

  removeFromCart(product) {
    const { cart } = this.state;
    const productIndex = cart.findIndex(item => item.id === product.id);

    if (productIndex !== -1) {
      if (cart[productIndex].quantity > 1) {
        cart[productIndex].quantity--;
      } else {
        cart.splice(productIndex, 1);
      }

      this.setState({ cart });
    }
  }

  calculateTotalCost() {
    const { cart } = this.state;
    let totalCost = 0;

    cart.forEach(product => {
      totalCost += product.price * product.quantity;
    });

    return totalCost;
  }

  render() {
    const { cart, products } = this.state;
    const totalCost = this.calculateTotalCost();

    return (
      <div className="container">
        <h1>Shopping Cart</h1>

        <div className="row products">
          <div className="col-12">
            <h2>Product List</h2>
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-3">Product Name</div>
              <div className="col-3">Price</div>
              <div className="col-3">Quantity</div>
              <div className="col-3"></div>
            </div>
          </div>
          <div className="col-12">
            {products.map(product => (
              <div className="row cart-item" key={product.id}>
                <div className="col-3">
                  <img className="cart-item-img" src={`product${product.id}.jpg`} alt={product.name} />
                </div>
                <div className="col-3">{product.name}</div>
                <div className="col-3">Kshs {product.price}</div>
                <div className="col-3">
                  <input className="form-control" type="number" min="1" defaultValue="1" ref={input => (product.inputRef = input)} />
                  <button className="btn btn-primary mt-2" onClick={() => this.addToCart(product)}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="row cart">
          <div className="col-12">
            <h2>Cart</h2>
          </div>
          <div className="col-12">
            <div className="row">
              <div className="col-3">Product Name</div>
              <div className="col-3">Price</div>
              <div className="col-3">Quantity</div>
              <div className="col-3"></div>
            </div>
          </div>
          <div className="col-12">
            {cart.map(product => (
              <div className="row cart-item" key={product.id}>
                <div className="col-3">
                  <img className="cart-item-img" src={`product${product.id}.jpg`} alt={product.name} />
                </div>
                <div className="col-3">{product.name}</div>
                <div className="col-3">Kshs {product.price}</div>
                <div className="col-3">
                  <button className="btn btn-danger" onClick={() => this.removeFromCart(product)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <h2>Total Cost: Kshs {totalCost}</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <button className="btn btn-success">Checkout</button>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
