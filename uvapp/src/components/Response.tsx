import * as React from "react";
import {
  EXTREM,
  LOW,
  TODAY,
  HIGH,
  MEDIUM,
  TOMORROW,
  VERYHIGH,
  AFTERTOMORROW,
  BORDERRADIUS,
  DARKBLUE,
  RESPONSETITLE,
} from "../Constants";
import ResponseCard from "./ResponseCard";
import CSS from "csstype";

const divStyle: CSS.Properties = {
  borderRadius: BORDERRADIUS,
  background: DARKBLUE,
  color: "white",
  width: "100%",
  overflow:"auto",
  paddingLeft: "10px",
  paddingRight: "10px",
  paddingTop: "10px",
  marginTop: "10px",
  boxSizing: "border-box",
};

const divLeft: CSS.Properties = {
  float: "left",
  width: "33.33333%",
  paddingRight: "5px",
  boxSizing: "border-box",
};

const divMiddle: CSS.Properties = {
  float: "left",
  width: "33.33333%",
  boxSizing: "border-box",
};

const divRight: CSS.Properties = {
  float: "right",
  width: "33.33333%",
  paddingLeft: "5px",
  boxSizing: "border-box",
};

interface IValues {
  todayValue: string;
  tomorrowValue: string;
  afterTomorrowValue: string;
}

const Response: React.FC<{ values: IValues }> = (props) => {
  return (
    <div style={divStyle}>
      <div style={divLeft}>
        <ResponseCard text={TODAY}></ResponseCard>
        <ResponseCard text={props.values.todayValue}></ResponseCard>
      </div>
      <div style={divMiddle}>
        <ResponseCard text={TOMORROW}></ResponseCard>
        <ResponseCard text={props.values.tomorrowValue}></ResponseCard>
      </div>
      <div style={divRight}>
        <ResponseCard text={AFTERTOMORROW}></ResponseCard>
        <ResponseCard text={props.values.afterTomorrowValue}></ResponseCard>
      </div>
    </div>
  );
};

export default Response;
