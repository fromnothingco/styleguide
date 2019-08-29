import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Guide from "./pages/guide.mdx";
import { MDXProvider } from "@mdx-js/react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "./style/theme";
import { H1, H2, H3, H4, H5, H6 } from "./components/generics/headings";
import { darken } from "polished";

function Index() {
  return <h2>Home</h2>;
}

const GlobalStyle = createGlobalStyle`
  html, body, #app {
    height:100%;
  }
  body {
    background: #fff;
    font-family: ${props => props.theme.main.font || "sans-serif"};
    color: ${props => props.theme.main.color || "#333"};
    line-height: 160%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    font-size: ${props => props.theme.main.baseFontSize || "16px"};
  }

  * {
    box-sizing:border-box;
  }

  a {
    color: ${props => props.theme.links.color || "999"};
    &:hover {
      color: ${props => darken(0.2, props.theme.links.color())};
    }
  }

  .content {
    padding: 2rem;
    width:80%;
    margin: 0 auto;
    overflow-x: auto;
  }

  .sidebar {
    padding: 2rem;
    background: #000;
  }

  .main {
    height:100%;
    .content {
      flex:5;
    }
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <div className="main">
          <div className="content">
            <Guide />
          </div>
        </div>
      </Router>
    </>
  );
};

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6
};

render(
  <ThemeProvider theme={theme}>
    <MDXProvider components={components}>
      <App />
    </MDXProvider>
  </ThemeProvider>,
  document.getElementById("app")
);
