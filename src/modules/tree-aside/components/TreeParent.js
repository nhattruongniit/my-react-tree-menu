import React from "react";
import { Link } from "react-router-dom";

import TreeNode from "./TreeNode";

const TreeParent = ({ data }) => {
  const getRootNodes = () => {
    return Object.values(data).filter((item) => item.isRoot);
  };

  const getChildrenNodes = (node) => {
    if (Object.values(node.nodes).length === 0) return [];
    return Object.values(data).filter((item) => item.index === node.index);
  };

  const rootNodes = getRootNodes();

  return (
    <>
      {rootNodes.map((node, idx) => {
        return (
          <TreeNode key={idx} node={node} getChildrenNodes={getChildrenNodes} />
        );
      })}
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
    </>
  );
};

export default TreeParent;
