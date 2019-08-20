import * as api from "../services/api";

// initState
const initialState = {
  documents: [],
  simulators: [],
  charts: []
};

const FETCH_DOCUMENT_SUCCESS = "FETCH_DOCUMENT_SUCCESS";
const FETCH_DOCUMENT_FAILURE = "FETCH_DOCUMENT_FAILURE";

const FETCH_SIMULATOR_SUCCESS = "FETCH_SIMULATOR_SUCCESS";
const FETCH_SIMULATOR_FAILURE = "FETCH_SIMULATOR_FAILURE";

const FETCH_CHART_SUCCESS = "FETCH_CHART_SUCCESS";
const FETCH_CHART_FAILURE = "FETCH_CHART_FAILURE";

export const actFetchDocuments = () => async dispatch => {
  try {
    const { data } = await api.fetchDocuments();
    dispatch({ type: FETCH_DOCUMENT_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: FETCH_DOCUMENT_FAILURE, payload: [] });
  }
};

export const actFetchSimulatorByDocumentId = id => async dispatch => {
  try {
    const { data } = await api.fetchSimulator(id);
    dispatch({ type: FETCH_SIMULATOR_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: FETCH_SIMULATOR_FAILURE, payload: [] });
  }
};

export const actFetchChartBySimId = id => async dispatch => {
  try {
    const { data } = await api.fetchCharts(id);
    dispatch({ type: FETCH_CHART_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: FETCH_CHART_FAILURE, payload: [] });
  }
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_DOCUMENT_SUCCESS: {
      return {
        ...state,
        documents: payload
      };
    }
    case FETCH_DOCUMENT_FAILURE: {
      return {
        ...state,
        documents: []
      };
    }
    case FETCH_SIMULATOR_SUCCESS: {
      return {
        ...state,
        simulators: [...state.simulators, payload]
      };
    }
    case FETCH_SIMULATOR_FAILURE: {
      return {
        ...state,
        simulators: [...state.simulators, payload || []]
      };
    }
    case FETCH_CHART_SUCCESS: {
      return {
        ...state,
        charts: [...state.charts, payload]
      };
    }
    case FETCH_CHART_FAILURE: {
      return {
        ...state,
        charts: [...state.charts, payload || []]
      };
    }
    default:
      return state;
  }
}
