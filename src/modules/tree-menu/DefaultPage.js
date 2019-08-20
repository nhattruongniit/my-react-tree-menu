import React, { useEffect } from "react";
import { connect } from "react-redux";

// reducers
import { actFetchDocuments, actFetchSimulator, actFetchCharts } from "./reducers";

const TreeMenu = ({
  documents,
  simulators,
  charts,
  actFetchDocuments,
  actFetchSimulator,
  actFetchCharts
}) => {
  useEffect(() => {
    actFetchDocuments();
    actFetchSimulator();
    actFetchCharts();
  }, []);

  const getSimByDocId = document => {
    const getSim = simulators.filter(val => val.document_id === document.id);
    return getSim;
  }

  const getChartsBySimId = sim => {
    const getSim = charts.filter(val => val.parent_simulation_id === sim.id);
    return getSim;
  }
  
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
          {/* {renderSubTree(newDocuments)} */}
          {documents.map(doc => {
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
                <p>{doc.document_name}</p>
                <ul>
                  {getSimByDocId(doc).map(sim => {
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
                        <p>{sim.simulation_name}</p>
                        <ul>
                          {getChartsBySimId(sim).map(chart => {
                            return (
                              <li>
                                <input type="checkbox" value="pie" name="Pie Chart" />
                                {chart.chart_name}
                              </li>
                            )
                          })}
                        </ul>
                      </li>
                    )
                  })}
                  
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
  actFetchSimulator,
  actFetchCharts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TreeMenu);
