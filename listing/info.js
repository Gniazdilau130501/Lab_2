import React from "react";

// Новый компонент
class Info extends React.Component {
  render() {
    return (
      <div className="info" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h2>SunShine</h2>
        <p>Узнайте все о погоде!</p>
      </div>
    );
  }
}

export default Info;
