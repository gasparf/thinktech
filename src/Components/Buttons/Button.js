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
  onClick,
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
      onClick={onClick}
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
