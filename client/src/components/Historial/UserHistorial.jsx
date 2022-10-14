import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCartHistory } from "../../state/cartHistory";
import HistorialItems from "./HistorialItems";

function UserHistorial() {
  const [historyProducts, setHistoryProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const history = await dispatch(getCartHistory());
      const setHistory = await setHistoryProducts(history.payload);
    }
    fetchData();
  }, []);

  return (
    <section className="text-gray-600 body-font">
      {historyProducts.length > 0 ? historyProducts.map((item, i) => (
        <HistorialItems key={i} products={item} item={i} />
      )) : (<h1 style={{fontSize:"40px",textAlign:"center", marginTop:"50vh"}}>You have nothing in your purchase history</h1>)}
    </section>
  );
}

export default UserHistorial;
