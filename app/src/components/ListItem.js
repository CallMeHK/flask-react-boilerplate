import React from "react";

export default function ListItem(props) {
  return (
    <div className="card">
      <div
        className="card-content"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <div>
          <div>Name: Ty</div>
          <div>Pokemon: Squirtle</div>
        </div>
        <div>
        <button className="waves-effect waves-light btn">Edit</button>
        <button className="waves-effect waves-light btn danger">Delete</button>
        </div>
      </div>
    </div>
  );
}
