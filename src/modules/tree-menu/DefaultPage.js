import React, { useEffect } from "react";
import { connect } from "react-redux";

// reducers
import { actFetchDocuments, actFetchSimulatorByDocumentId } from "./reducers";

const TreeMenu = ({
  documents,
  simulators,
  actFetchDocuments,
  actFetchSimulatorByDocumentId
}) => {
  let newDocuments = [];
  // for (const doc of documents) {
  //   if (!doc.parentKey) {
  //     newDocuments.push(doc);
  //   }
  // }

  const mapArray = data => {
    const normalize = normalData => {
      const result = {};
      for (const val of data) {
        if (val.type === "simulation") {
          console.log(val);
          result[val.type] = val;
        }
      }
      return result;
    };
    return normalize(data);
  };

  const output = mapArray(documents);

  console.log("result: ", output);

  useEffect(() => {
    actFetchDocuments();
  }, [actFetchDocuments]);

  // const onChangeDocument = id => e => {
  //   const { checked } = e.target;
  //   const idExisted = simulators.some(val => val.id === id);
  //   if (checked && !idExisted) {
  //     actFetchSimulatorByDocumentId(id);
  //   }
  // };

  return (
    <>
      <div className="treemenu">
        <ul className="treemenu__ul">
          {newDocuments.map(doc => {
            return (
              <li>
                <input className="toggleMenu" type="checkbox" />
                <span className="arrow arrow__collapse">
                  <svg width="7" height="12" viewBox="0 0 7 12">
                    <path d="M5.569 5.994L0 .726.687 0l6.336 5.994-6.335 6.002L0 11.27z" />
                  </svg>
                </span>
                <span className="arrow arrow__expand">
                  <svg width="12" height="7" viewBox="0 0 12 7">
                    <path d="M6.002 5.55L11.27 0l.726.685L6.003 7 0 .685.726 0z" />
                  </svg>
                </span>
                <p>{doc.label}</p>
                <ul>
                  <li>
                    <input className="toggleMenu" type="checkbox" />
                    <span className="arrow arrow__collapse">
                      <svg width="7" height="12" viewBox="0 0 7 12">
                        <path d="M5.569 5.994L0 .726.687 0l6.336 5.994-6.335 6.002L0 11.27z" />
                      </svg>
                    </span>
                    <span className="arrow arrow__expand">
                      <svg width="12" height="7" viewBox="0 0 12 7">
                        <path d="M6.002 5.55L11.27 0l.726.685L6.003 7 0 .685.726 0z" />
                      </svg>
                    </span>
                    <p>Sim 1</p>
                    <ul>
                      <li>
                        <input type="checkbox" value="pie" name="Pie Chart" />
                        Pie Chart
                      </li>
                      <li>
                        <input type="checkbox" value="bar" name="Bar heading" />
                        Bar heading
                      </li>
                    </ul>
                  </li>
                  <li>
                    <input className="toggleMenu" type="checkbox" />
                    <span className="arrow arrow__collapse">
                      <svg width="7" height="12" viewBox="0 0 7 12">
                        <path d="M5.569 5.994L0 .726.687 0l6.336 5.994-6.335 6.002L0 11.27z" />
                      </svg>
                    </span>
                    <span className="arrow arrow__expand">
                      <svg width="12" height="7" viewBox="0 0 12 7">
                        <path d="M6.002 5.55L11.27 0l.726.685L6.003 7 0 .685.726 0z" />
                      </svg>
                    </span>
                    <p>Sim 2</p>
                  </li>
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  const {
    documents: { documents, simulators, charts }
  } = state;
  return {
    documents,
    simulators,
    charts
  };
};

const mapDispatchToProps = {
  actFetchDocuments,
  actFetchSimulatorByDocumentId
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TreeMenu);
