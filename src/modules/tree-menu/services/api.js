// import request from "../../../services/request";
import { documents, simulators, charts } from "../data";

export const fetchDocuments = async () => {
  return documents;
  // return request("/documents");
};

export const fetchSimulator = async () => {
  return simulators;
  // return request(`/simulators`);
};

export const fetchCharts = async () => {
  return charts;
  // return request(`/charts`);
};
