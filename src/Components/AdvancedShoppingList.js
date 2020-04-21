import React, { useState } from "react";
import "./AdvancedShoppingList.css";

function AdvancedShoppingList({ list, owner }) {
  const [newOne, setNewOne] = useState("");
  const [newQty, setNewQty] = useState("1");

  const [anilList, setAnilList] = useState(list);

  const addItem = function (event) {
    event.preventDefault();
    setAnilList(anilList.concat({ name: newOne, qty: newQty }));
    setNewOne("");
    setNewQty("1");
  };

  const onNameChange = function (event) {
    setNewOne(event.target.value);
  };
  const onCheckChange = function (event, i) {
    const tempList = [...anilList];
    tempList[i].done = event.target.checked;
    setAnilList(tempList);
  };
  const onQtyChange = function (event) {
    setNewQty(event.target.value);
  };
  return (
    <div className="shopping-list">
      <h3>{owner}</h3>
      <div className="Addshoppinglist-form">
        <form className="form-inline" onSubmit={addItem}>
          <div className="form-group mr-2">
            <input
              type="text"
              className="form-control"
              placeholder="New Item"
              onChange={onNameChange}
              value={newOne}
            />
          </div>
          <div className="form-group mr-2">
            <input
              type="number"
              className="form-control qty-field"
              placeholder="Qty"
              onChange={onQtyChange}
              value={newQty}
            />
          </div>
          <div className="form-group">
            <button type="add" className="btn btn-primary">
              Add
            </button>
          </div>
        </form>
      </div>
      <ul className="advanced-shopping">
        {anilList.map((product, i) => (
          <li>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className=" form-check-input"
                id="customCheck1"
                checked={product.done}
                onChange={(event) => {
                  onCheckChange(event, i);
                }}
              />
              {i}
              <span
                style={{
                  textDecoration: product.done ? "line-through" : "none",
                  fontWeight: product.important ? "bold" : "normal",
                }}
              >
                <span> {product.name}</span>
                <span className="quantity">{product.qty}</span>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdvancedShoppingList;
