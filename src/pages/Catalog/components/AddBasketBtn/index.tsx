import React from 'react';
import './index.css';

interface IAddBasketBtn {
    choosePropuct: ()=> void
}

const AddBasketBtn: React.FC<IAddBasketBtn> = ({choosePropuct}) => {
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