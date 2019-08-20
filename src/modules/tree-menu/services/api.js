import request from "../../../services/request";

export const fetchDocuments = () => {
  return request("/documents");
};

export const fetchSimulator = id => {
  return request(`/simulators/${id}`);
};

export const fetchCharts = id => {
  return request(`/charts/${id}`);
};
