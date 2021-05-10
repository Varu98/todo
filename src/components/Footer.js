import React from "react";

export const Footer = () => {
  let footerStyle = {
    position: "relative",
    top: "10vh",
    width: "100%",
  };
  return (
    <div className="bg-dark text-light py-3" style={footerStyle}>
      <p>copyright &copy; Vardaan Agarwal</p>
    </div>
  );
};
