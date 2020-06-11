import React from "react";
import { NavLink, Route } from "react-router-dom";

// modules
import TreeMenu from "./modules/tree-menu";
import FileExplorer from "./modules/file-explorer";
import TreeAside from "./modules/tree-aside";

function App() {
  return (
    <>
      <div className="menu">
        <ul>
          <li>
            <NavLink to="/tree-menu">Tree Menu</NavLink>
          </li>
          <li>
            <NavLink to="/file-explorer">File Explorer</NavLink>
          </li>
          <li>
            <NavLink to="/tree-aside">Tree Aside</NavLink>
          </li>
        </ul>
      </div>
      <div className="content">
        <Route path="/tree-menu" exact component={TreeMenu} />
        <Route path="/file-explorer" component={FileExplorer} />
        <Route path="/tree-aside" component={TreeAside} />
      </div>
    </>
  );
}

export default App;
