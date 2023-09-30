import "./index.css";
import { Link } from "react-router-dom";

const BasketEmpty = () => {
  return (
    <div className="basket__empty-page">
      <div className="basket__empty-page-img"></div>
      <div className="basket__empty-page-info">
        <h2 className="basket__empty-page-title">Корзина пуста</h2>
        <p>Для поиска товаров воспольльзуйтесь каталогом</p>
        <Link to={'/catalog'}>
            <button className="basket__redirect-catalog-btn">В каталог</button>
        </Link>

      </div>
    </div>
  );
};

export default BasketEmpty;
