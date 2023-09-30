import React from 'react';
import './index.css';
import AddBasketBtn from '../AddBasketBtn';
import RedirectBasketBtn from '../RedirectBasketBtn';

interface ProductCardProps {
    image: string,
    name: string,
    price: string,
    id: string,
    choosePropuct: ()=> void,
    isChoosen: boolean
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  price,
  choosePropuct,
  id,
  isChoosen,
}) => {
  return (
    <div className="product-card">
      <img src={image} alt="img" className="product-card__img" />
      <h2 className="product-card__title">{name}</h2>
      <h3 className="product-card__price">Цена: {price}р.</h3>
      {isChoosen ? (
        <RedirectBasketBtn></RedirectBasketBtn>
      ) : (
        <AddBasketBtn choosePropuct={choosePropuct}></AddBasketBtn>
      )}
    </div>
  );
};

export default ProductCard;