import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Typography from "./pages/typography.mdx";
import Forms from "./pages/forms.mdx";
import Buttons from "./pages/buttons.mdx";
import { MDXProvider } from "@mdx-js/react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "./style/theme";
import { H1, H2, H3, H4, H5, H6 } from "./components/generics/headings";

function Index() {
  return <h2>Home</h2>;
}

const GlobalStyle = createGlobalStyle`
  html, body, #app {
    height:100%;
  }
  body {
    background: ${props => props.theme.main.background || "#fff"};
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
      color: ${props => props.theme.links.hover.color || "fff"};
    }
  }

  .content {
    padding: 2rem;
    overflow-x: auto;
  }

  .sidebar {
    padding: 2rem;
    background: #000;
  }

  .main {
    display: flex;
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
          <div className="sidebar">
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/typography/">Typography</Link>
                </li>
                <li>
                  <Link to="/forms/">Forms &amp; inputs</Link>
                </li>
                <li>
                  <Link to="/buttons/">Buttons</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="content">
            <Route path="/" exact component={Index} />
            <Route path="/typography/" component={Typography} />
            <Route path="/forms/" component={Forms} />
            <Route path="/buttons/" component={Buttons} />
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
