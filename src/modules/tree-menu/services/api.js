import request from "../../../services/request";

export const fetchDocuments = () => {
  return request("/documents");
};

export const fetchSimulator = () => {
  return request(`/simulators`);
};

export const fetchCharts = () => {
  return request(`/charts`);
};
