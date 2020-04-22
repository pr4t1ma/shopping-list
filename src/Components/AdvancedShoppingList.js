import React, { useState } from "react";
import "./AdvancedShoppingList.css";

function AdvancedShoppingList({ list, owner }) {
  const [newOne, setNewOne] = useState("");
  const [newQty, setNewQty] = useState(1);

  const [myList, setMyList] = useState(list);

  const addItem = function (event) {
    event.preventDefault();
    if (newOne && newQty > 0) {
      setMyList(myList.concat({ name: newOne, qty: newQty }));
      setNewOne("");
      setNewQty(1);
    } else {
      if (newOne) {
        alert("Hey you will have to add some numbers.");
      } else {
        alert("You need to add a name of your item!");
      }
    }
  };

  const deleteHandler = function (i) {
    const tempList = [...myList];
    tempList.splice(i, 1);
    setMyList(tempList);
  };

  const onNameChange = function (event) {
    setNewOne(event.target.value);
  };
  const onCheckChange = function (event, i) {
    const tempList = [...myList];
    tempList[i].done = event.target.checked;
    setMyList(tempList);
  };
  const onQtyChange = function (event) {
    setNewQty(+event.target.value);
  };
  return (
    <div className="shopping-list">
      <div className="shopping-list-form">
        <h3>Shopping List</h3>
        <form className="form-inline" onSubmit={addItem}>
          <div className="form-group mr-2 name">
            <input
              type="text"
              className="form-control"
              placeholder="New Item"
              onChange={onNameChange}
              value={newOne}
            />
          </div>
          <div className="form-group mr-2 qty">
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
        {myList.map((product, i) => (
          <li>
            <div className="custom-control custom-checkbox">
              <label htmlFor={"check" + i}>
                <input
                  type="checkbox"
                  className=" form-check-input"
                  id={"check" + i}
                  checked={product.done}
                  onChange={(event) => {
                    onCheckChange(event, i);
                  }}
                />
                <span
                  style={{
                    textDecoration: product.done ? "line-through" : "none",
                    fontWeight: product.important ? "bold" : "normal",
                  }}
                >
                  <span className="number">
                    {i + 1} {product.name}
                  </span>
                  <span className="quantity"> x {product.qty}</span>
                </span>
              </label>
              <button className="btn-delete" onClick={() => deleteHandler(i)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdvancedShoppingList;
