import React from "react";
import { Route } from "react-router-dom";

import Toolbar from "./views/Toolbar";
import Home from "./views/Home";
import Counter from "./views/Counter";
import Lister from "./views/Lister";

function App() {
  const menuPaths = [
    { name: "Home", path: "/" },
    { name: "Counter", path: "/counter" },
    { name: "Lister", path: "/lister" }
  ];
  return (
    <div className="App">
      <Toolbar paths={menuPaths} title="Pages" />
      <div className="container-margin">
        <div className="container">
          <Route path="/" exact component={Home} />
          <Route path="/counter" component={Counter} />
          <Route path="/lister" component={Lister} />
        </div>
      </div>
    </div>
  );
}

export default App;
