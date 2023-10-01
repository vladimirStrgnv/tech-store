import { Link } from "react-router-dom";
import "./index.css";

const RedirectBasketBtn = () => {
  return (
    <Link to={"/basket"}>
      <button className="product-card__redirect-basket-btn">
        Оформить заказ
      </button>
    </Link>
  );
};

export default RedirectBasketBtn;
