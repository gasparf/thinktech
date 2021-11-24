import React from "react";
import "./Button.css";

const Button = ({
  height,
  width,
  borderRadius,
  backgroundColor,
  textColor,
  text,
  fontSize,
  border,
}) => {
  return (
    <div
      className="button"
      style={{
        height: height,
        width: width,
        borderRadius: borderRadius,
        backgroundColor: backgroundColor,
        color: textColor,
        border: border,
      }}
    >
      <span
        className="buttontext"
        style={{ fontSize: fontSize, fontWeight: "bold" }}
      >
        {text}
      </span>
    </div>
  );
};

export default Button;
