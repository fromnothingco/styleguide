import { darken } from "polished";

const theme = {
  colors: {
    primary: "#4069FF",
    secondary: "#6B757D",
    success: "#15CFA0",
    danger: "#ED5564",
    warning: "#FFA734",
    info: "#2ABED2",
    light: "#F8F9FA",
    dark: "#343A40"
  },
  main: {
    background: () => theme.colors.light,
    color: () => theme.colors.dark,
    borderRadius: "5px"
  },
  links: {
    color: () => theme.colors.primary
  },
  input: {
    color: () => theme.colors.dark
  },
  label: {
    color: () => theme.colors.dark
  },
  headings: {
    color: () => theme.colors.dark,
    h1: {
      size: "2rem"
    },
    h2: {
      size: "1.7rem"
    },
    h3: {
      size: "1.5rem"
    },
    h4: {
      size: "1.2rem"
    },
    h5: {
      size: "1rem"
    },
    h6: {
      size: "0.9rem"
    }
  },
  buttons: {
    background: () => theme.colors.primary,
    color: "#fff",
    border: "1px solid transparent",
    hover: {
      color: "#fff",
      border: "1px solid #fff"
    }
  },
  mast: {},
  containers: {}
};

export default theme;
