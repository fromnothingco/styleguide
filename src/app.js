import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Typography from "./pages/typography.mdx";
import Forms from "./pages/forms.mdx";
import { MDXProvider } from "@mdx-js/react";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import { H1, H2, H3, H4, H5, H6 } from "./components/generics/headings";

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

const App = () => {
  return (
    <Router>
      <div>
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
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/typography/" component={Typography} />
        <Route path="/forms/" component={Forms} />
      </div>
    </Router>
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
