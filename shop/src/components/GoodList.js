import GoodItem from "./GoodItem";

export default function GoodList(props) {
  const { goods = [], addToBasket } = props;

  if (!goods.length) {
    return <h3>Nothng here</h3>;
  }

  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodItem key={item.id} {...item} addToBasket={addToBasket} />
      ))}
    </div>
  );
}
