export default function BasketItem(props) {
  const { id, name, price, quantity } = props;
  return (
    <li className="collection-item" key={id}>
      {name} x{quantity} = {price}
      <b>$</b>
      <span className="secondary-content">
        <i class="material-icons">delete_forever</i>
      </span>
    </li>
  );
}
