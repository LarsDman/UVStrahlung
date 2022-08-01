import * as React from "react";
import {
  BORDERRADIUS,
  EXTREM,
  LOW,
  MEDIUM,
  HIGH,
  VERYHIGH,
  LOWCOLOR,
  MEDIUMCOLOR,
  HIGHCOLOR,
  VERYHIGHCOLOR,
  EXTREMCOLOR,
  GREEN,
} from "../Constants";
import { CSSProperties } from "react";

const ResponseCard: React.FC<{ text: String }> = (props) => {
  let back = "";

  if (isNaN(parseInt(props.text.toString())) === false) {
    let value = parseInt(props.text.toString());
    if (value >= 0 && value <= 2) {
      back = LOWCOLOR;
    } else if (value >= 3 && value <= 5) {
      back = MEDIUMCOLOR;
    } else if (value >= 6 && value <= 7) {
      back = HIGHCOLOR;
    } else if (value >= 8 && value <= 10) {
      back = VERYHIGHCOLOR;
    } else if (value >= 11) {
      back = EXTREMCOLOR;
    }
  } else {
    switch (props.text) {
      case LOW: {
        back = LOWCOLOR;
        break;
      }
      case MEDIUM: {
        back = MEDIUMCOLOR;
        break;
      }
      case HIGH: {
        back = HIGHCOLOR;
        break;
      }
      case VERYHIGH: {
        back = VERYHIGHCOLOR;
        break;
      }
      case EXTREM: {
        back = EXTREMCOLOR;
        break;
      }
      default: {
        back = GREEN;
        break;
      }
    }
  }

  const h1Styles: CSSProperties = {
    borderRadius: BORDERRADIUS,
    background: back,
    width: "100%",
    padding: "5px",
    border: back,
    color: "white",
    marginBottom: "10px",
    textAlign: "center",
    boxSizing: "border-box",
  };

  return <div style={h1Styles}>{props.text}</div>;
};

export default ResponseCard;
