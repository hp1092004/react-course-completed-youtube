import React from "react";

const Container = ({ children }) => {
  return (
    <div className="card" style={{ width: "70%" }}>
      {children}
      <div className="card-body"></div>
    </div>
  );
};

export default Container;
