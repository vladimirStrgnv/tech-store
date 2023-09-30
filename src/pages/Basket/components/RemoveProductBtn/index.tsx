import "./index.css";

const RemoveProductBtn = ({ deleteChoosenPropuct }) => {
  return (
    <button
      onClick={() => deleteChoosenPropuct()}
      className="basket__delete-product-btn"
    >
      Убрать
    </button>
  );
};

export default RemoveProductBtn;
