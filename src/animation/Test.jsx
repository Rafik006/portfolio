import React from "react";

export default function Animation({ info, type, className }) {
  return (
    <div className={`  px-5 container  ${className ? className : ""}`}>{info}</div>
  );
}
