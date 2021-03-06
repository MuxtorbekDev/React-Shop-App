import BasketItem from "./BasketItem";

export default function BasketList(props) {
  const {
    order,
    handleBasketShow,
    removeFromBasket,
    incrementQuantity,
    decremntQuantity,
  } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);
  return (
    <div className="bskl">
      <ul className="collection basket-list">
        <li className="collection-item active">Basket</li>
        {order.length ? (
          order.map((item) => {
            return (
              <BasketItem
                key={item.id}
                {...item}
                removeFromBasket={removeFromBasket}
                incrementQuantity={incrementQuantity}
                decremntQuantity={decremntQuantity}
              />
            );
          })
        ) : (
          <li className="collection-item">Basket is empty</li>
        )}
        <li className="collection-item active">
          Total Cost: {totalPrice}
          <b>$</b>
        </li>
        <i className="material-icons basket-close" onClick={handleBasketShow}>
          close
        </i>
      </ul>
    </div>
  );
}
