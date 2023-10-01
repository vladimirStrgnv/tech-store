import './index.css';

const AddBasketBtn = ({choosePropuct}) => {
  return (
    <button
      className="product-card__add-product-btn"
      onClick={() => choosePropuct()}
    >
      Добавить в корзину
    </button>
  );
};

export default AddBasketBtn;