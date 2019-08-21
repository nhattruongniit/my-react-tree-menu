import React from "react";
import { NavLink, Route } from "react-router-dom";

// modules
import TreeMenu from "./modules/tree-menu";
import FileExplorer from "./modules/file-explorer";

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
        </ul>
      </div>
      <div className="content">
        <Route path="/tree-menu" exact component={TreeMenu} />
        <Route path="/file-explorer" component={FileExplorer} />
      </div>
    </>
  );
}

export default App;
