export default function Cart(props) {
  const { quantity = 0 } = props;
  return (
    <div className="cart #00acc1 cyan darken-1">
      <i className="Medium material-icons">add_shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
}
