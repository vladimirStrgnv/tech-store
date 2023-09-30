import "./index.css";

const RemoveProductBtn = ({ deleteChoosenPropuct }) => {
  return (
    <button
      onClick={() => deleteChoosenPropuct()}
      className="basket__delete-product-btn"
    >
      Убрать из корзины
    </button>
  );
};

export default RemoveProductBtn;
