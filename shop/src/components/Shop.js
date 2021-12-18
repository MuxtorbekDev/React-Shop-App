import { useState, useEffect } from "react";
import { API_URL, API_KEY } from "../config";
import Loader from "./Loader";
import GoodList from "./GoodList";
import Cart from "./Cart";

export default function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.featured && setGoods(data.featured);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container content ">
      <Cart quantity={goods.length} />
      {loading ? <Loader /> : <GoodList goods={goods} />}
    </div>
  );
}
