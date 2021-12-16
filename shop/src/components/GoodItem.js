export default function GoodItem(props) {
  const [id, name, description, price, full_background] = props;

  return (
    <div className="card" id={id}>
      <div className="card-image">
        <img src={full_background} alt={name} />
      </div>
      <span className="card-title">{name}</span>
      <div className="card-content">
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button className="btn">Buy</button>
        <span className="right">{price}$</span>
      </div>
    </div>
  );
}
