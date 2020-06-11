export const data = {
  "top-page": {
    label: "Top Page",
    isRoot: true,
    index: 0,
    path: "/",
    nodes: {},
  },
  dashboard: {
    label: "Dashboard",
    isRoot: true,
    index: 1,
    path: "/",
    nodes: {},
  },
  documents: {
    label: "Documents",
    isRoot: true,
    index: 3,
    path: null,
    nodes: {
      "document-1": {
        label: "Document 1",
        isRoot: false,
        index: 3,
        path: "/document-1",
        nodes: {},
      },
      "document-2": {
        label: "Document 2",
        isRoot: false,
        index: 3,
        path: "/document-2",
        nodes: {},
      },
    },
  },
  material: {
    label: "Material-UI",
    isRoot: true,
    index: 4,
    path: null,
    nodes: {
      "material-1": {
        label: "material 1",
        isRoot: false,
        index: 4,
        path: "/document-1",
        nodes: {},
      },
    },
  },
};
