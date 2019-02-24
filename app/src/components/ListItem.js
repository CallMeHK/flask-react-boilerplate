import React, { useState } from "react";
import api from "../helpers/api";

export default function ListItem(props) {
  const [edit, updateEdit] = useState(false);
  const [newPokemon, editPokemon] = useState(props.obj.pokemon);

  function deleteItem() {
    api.deleteOne("items", props.obj._id.$oid).then(() => props.update());
  }

  function onSubmit() {
    api
      .patchOne(
        "items",
        { name: props.obj.name, pokemon: newPokemon },
        props.obj._id.$oid
      )
      .then(() => {
        props.update().then(() => updateEdit(!edit))
        ;
      });
  }
  return (
    <div className="card">
      <div
        className="card-content"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <div>
          <div
            style={{
              textAlign: "left",
              color: "grey"
            }}
          >
            Owner: {props.obj.name}
          </div>
          {edit ? (
            <input value={newPokemon} onChange={e => editPokemon(e.target.value)} />
          ) : (
            <h4 style={{ margin: ".8rem 0" }}>{props.obj.pokemon}</h4>
          )}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
          <button
            onClick={() => updateEdit(!edit)}
            className="waves-effect waves-light btn"
          >
            {edit ? "Cancel" : "Edit"}
          </button>
          {edit ? (
            <button
              onClick={onSubmit}
              className="waves-effect waves-light btn light-blue lighten-1"
            >
              Save
            </button>
          ) : (
            <button
              className="waves-effect waves-light btn red"
              onClick={deleteItem}
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
