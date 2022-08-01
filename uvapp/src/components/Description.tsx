import * as React from "react";
import {
    BORDERRADIUS,
  DARKBLUE,
  EXTREM,
  HIGH,
  LOW,
  MEDIUM,
  RESPONSETITLE,
  VERYHIGH,
} from "../Constants";
import ResponseCard from "./ResponseCard";
import CSS from "csstype";

const Description = () => {
  const divStyle: CSS.Properties = {
    borderRadius: BORDERRADIUS,
    background: DARKBLUE,
    color: "white",
    width: "100%",
    overflow:"auto",
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingTop: "10px",
    boxSizing: "border-box",
  };

  const divLeftHalf: CSS.Properties = {
    float: "left",
    width: "50%",
    paddingRight: "2.5px",
    boxSizing: "border-box",
  };

  const divRightHalf: CSS.Properties = {
    float: "right",
    width: "50%",
    paddingLeft: "2.5px",
    boxSizing: "border-box",
  };
  return (
    <div style = {divStyle}>
      <ResponseCard text={RESPONSETITLE}></ResponseCard>
      <div style={divLeftHalf}>
        <ResponseCard text={LOW}></ResponseCard>
        <ResponseCard text={MEDIUM}></ResponseCard>
        <ResponseCard text={HIGH}></ResponseCard>
        <ResponseCard text={VERYHIGH}></ResponseCard>
        <ResponseCard text={EXTREM}></ResponseCard>
      </div>
      <div style={divRightHalf}>
        <ResponseCard text={"0-2"}></ResponseCard>
        <ResponseCard text={"3-5"}></ResponseCard>
        <ResponseCard text={"6-7"}></ResponseCard>
        <ResponseCard text={"8-10"}></ResponseCard>
        <ResponseCard text={"+11"}></ResponseCard>
      </div>
    </div>
  );
};

export default Description;
