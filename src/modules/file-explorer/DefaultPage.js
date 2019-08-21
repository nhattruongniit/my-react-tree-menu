import React from "react";
import { connect } from "react-redux";

// data
import { data } from "./data";

// components
import Tree from "./components/Tree";

const FileExplorer = () => {
  return (
    <>
      <h1>React tree menu with styled component</h1>
      <Tree data={data} />
    </>
  );
};

const mapStateToProps = () => {};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileExplorer);
