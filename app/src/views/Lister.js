import React, { useState, useEffect, useRef } from "react";
import Loading from "../components/Loading";
import ListItem from "../components/ListItem";
import api from "../helpers/api";

export default function Lister() {
  const [loading, updateLoading] = useState(true);
  const [items, updateItems] = useState({});
  const [newItem, updateNewItem] = useState({ name: "", pokemon: "" });

  const ref = useRef(null);
  const focusTextInput = () => {
    ref.current.focus();
  };

  function submitNewItem() {
    api
      .addOne("items", newItem)
      .then(res => api.getAll("items").then(res2 => updateItems(res2)));
    updateNewItem({ name: "", pokemon: "" });
    focusTextInput();
  }

  function keyPress(e) {
    if (e.keyCode == 13) {
      submitNewItem();
    }
  }

  function getList() {
    return api.getAll("items").then(res => {
      updateItems(res);
      updateLoading(false);
    });
  }

  useEffect(() => {
    getList();
  }, []);
  return (
    <div>
      <h1>Lister</h1>
      <div className="card">
        <div className="card-content">
          <div className="input-field">
            <input
              placeholder="Name"
              id="first_name"
              type="text"
              className="validate"
              onChange={e =>
                updateNewItem({ ...newItem, name: e.target.value })
              }
              value={newItem.name}
              ref={ref}
            />
          </div>
          <div className="input-field">
            <input
              id="last_name"
              placeholder="Pokemon"
              type="text"
              className="validate"
              onChange={e =>
                updateNewItem({ ...newItem, pokemon: e.target.value })
              }
              onKeyDown={keyPress}
              value={newItem.pokemon}
            />
          </div>
          <button
            onClick={submitNewItem}
            className="waves-effect waves-light btn"
          >
            Submit
          </button>
        </div>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <>
          {items.map((item, i) => (
            <ListItem
              key={`listItem-${item.name}-${i}`}
              obj={item}
              update={getList}
            />
          ))}
        </>
      )}
    </div>
  );
}
