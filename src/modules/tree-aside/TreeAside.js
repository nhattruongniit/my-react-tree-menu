import React from "react";

import TreeParent from "./components/TreeParent";

import "./styles.css";

import { data } from "./data";

const TreeAside = () => {
  return (
    <div className="treeAside">
      <h1>React tree aside same with Material UI</h1>
      <ul>
        <TreeParent data={data} />
      </ul>
      {/* <ul>
        <li>
          <Link to="/">Top Page</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <button>Showcase</button>
          <ul>
            <li>
              <Link to="/button">Button</Link>
            </li>
            <li>
              <Link to="/card">Card</Link>
            </li>
          </ul>
        </li>
        <li>
          <button>Documents</button>
          <ul>
            <li>
              <Link to="/document">Document 1</Link>
            </li>
            <li>
              <Link to="/document">Document 2</Link>
            </li>
          </ul>
        </li>
      </ul> */}
    </div>
  );
};

export default TreeAside;
