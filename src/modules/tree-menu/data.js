export const documents = [
  {
    id: 8983,
    document_name: "House_06_nomat",
    version_id: 1,
    mode: "free",
    project_id: 32,
  },
  {
    id: 8992,
    document_name: "idf document 2",
    version_id: 1,
    mode: "free",
    project_id: 32,
  },
  {
    id: 9002,
    document_name: "idf document 3",
    version_id: 1,
    mode: "free",
    project_id: 32,
  },
];

export const simulators = [
  {
    id: 8,
    simulation_name: "simulaton 7",
    document_id: 9002,
    status: "error",
    progress: 0,
  },
  {
    id: 9,
    simulation_name: "simulaton 8",
    document_id: 8992,
    status: "error",
    progress: 0,
  },
  {
    id: 10,
    simulation_name: "simulaton 9",
    document_id: 9002,
    status: "error",
    progress: 0,
  },
  {
    id: 11,
    simulation_name: "simulaton 10",
    document_id: 8983,
    status: "error",
    progress: 0,
  },
];

export const charts = [
  {
    id: 1,
    chart_name: "test 3",
    parent_simulation_id: 8,
    type: "string",
    options: "string",
  },
  {
    id: 2,
    chart_name: "test 123",
    parent_simulation_id: 9,
    type: "bar",
    options: "string",
  },
];
