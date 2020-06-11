import React from "react";
import { Link } from "react-router-dom";

const TreeNode = ({ node, getChildrenNodes }) => {
  console.log(getChildrenNodes(node)[0]);
  return (
    <>
      <li>
        {node.path ? (
          <Link to={node.path}>{node.label}</Link>
        ) : (
          <button>{node.label}</button>
        )}

        {getChildrenNodes(node)[0] &&
          Object.values(getChildrenNodes(node)[0].nodes).length > 0 &&
          Object.values(getChildrenNodes(node)[0].nodes).map((child, idx) => {
            return (
              <ul key={idx}>
                <TreeNode node={child} getChildrenNodes={getChildrenNodes} />
              </ul>
            );
          })}
      </li>
    </>
  );
};

export default TreeNode;
