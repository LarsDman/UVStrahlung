import * as React from "react";
import Card from "./Card";
import { BORDERRADIUS, CITIESTITLE, DARKBLUE } from "../Constants";
import ResponseCard from "./ResponseCard";
import CSS from "csstype";

interface ITypes {
  name: string;
  clicked: boolean;
}

const divOuterStyle: CSS.Properties = {
  borderRadius: BORDERRADIUS,
  background: DARKBLUE,
  color: "white",
  width: "100%",
  height: "100%",
  padding: "10px",
  boxSizing: "border-box",
};

const divInnerStyle: CSS.Properties = {
  height: "87%",
  overflow: "hidden",
  overflowY: "scroll",
  borderRadius: "15px",
};

const CityList: React.FC<{
  data: ITypes[];
  passClicked: (values: string) => void;
  selection: { name: string | null };
}> = (props) => {
  let x = JSON.parse(JSON.stringify(props.data));

  const handleClick = (targetID: string) => {
    props.passClicked(targetID);
  };

  return (
    <div style={divOuterStyle}>
      <ResponseCard text={CITIESTITLE}></ResponseCard>
      {props.data !== undefined && (
        <div style={divInnerStyle}>
          {props.data.map((element, index) => (
            <Card
              key={index}
              text={element.name}
              active={props.data[index].clicked}
              passClicked={handleClick}
            ></Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default CityList;
