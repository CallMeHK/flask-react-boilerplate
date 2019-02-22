import React, { useState, useEffect } from "react";
import Loading from "../components/Loading"
import ListItem from "../components/ListItem"
import api from "../helpers/api";

export default function Lister() {
  const [loading, updateLoading] = useState(true);
  const [items, updateItems] = useState({});
  useEffect(() => {
    api.getAll("items").then(res => {
      updateItems(res);
      updateLoading(false);
    });
  }, []);
  return (
    <div>
      <h1>Lister</h1>
      <ListItem/>
      {loading ? 
        <Loading/> :
        <>{JSON.stringify(items)}</>}
    </div>
  );
}
