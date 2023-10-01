import React from "react";
import "./index.css";

interface IRemoveProductBtn {
    deleteChoosenPropuct: ()=> void,
}

const RemoveProductBtn: React.FC<IRemoveProductBtn> = ({ deleteChoosenPropuct }) => {
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
