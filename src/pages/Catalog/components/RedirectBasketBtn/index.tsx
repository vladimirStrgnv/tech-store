import { Link } from "react-router-dom";
import './index.css';

const RedirectBasketBtn = () => {
  return (
    <button
      className="product-card__add-product-btn"
    >
      <Link to={'/basket'}>Оформить заказ</Link>
    </button>
  );
};

export default RedirectBasketBtn;