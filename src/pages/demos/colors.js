import React from "react";
import theme from "../../style/theme";
const Colors = props => (
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center"
    }}
  >
    {Object.keys(theme.colors).map(item => (
      <div
        style={{
          width: "20%",
          minWidth: "100px",
          margin: "1rem",
          textAlign: "center"
        }}
      >
        <span
          style={{
            display: "inline-block",
            height: "100px",
            width: "100%",
            maxWidth: "186px",
            marginBottom: "10px",
            borderRadius: "5px",
            background: theme.colors[item]
          }}
        />
        <div>{item}</div>
      </div>
    ))}
  </div>
);

export default Colors;
