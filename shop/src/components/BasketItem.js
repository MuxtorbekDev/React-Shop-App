export default function BasketItem(props) {
  const { id, name, price, quantity, removeFromBasket } = props;
  return (
    <li className="collection-item">
      {name} x{quantity} = {price * quantity}
      <b>$</b>
      <span className="secondary-content">
        <i class="material-icons" onClick={() => removeFromBasket(id)}>
          delete_forever
        </i>
      </span>
    </li>
  );
}
