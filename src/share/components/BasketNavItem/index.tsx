import  './index.css';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../store';

const BasketNavItem = () => {
    const { choosenProducts } = useAppSelector(
      (state) => state.catalog
    );

  return (
    <Link to={'basket'}>
      <div className="basket-nav-item">
        <div className="basket-nav-item__img"></div>
        <div className="basket-nav-item__counter">{choosenProducts.length}</div>
      </div>
    </Link>
  );
}

export default BasketNavItem;