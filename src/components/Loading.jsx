import React from "react";

const Loading = () => {
  return (
    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div className="spinner-grow" role="status"></div>
      <div className="spinner-grow" role="status"></div>
      <div className="spinner-grow" role="status"></div>
    </div>
  );
};

export default Loading;
