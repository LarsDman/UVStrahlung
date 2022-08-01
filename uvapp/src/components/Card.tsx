import * as React from "react";
import CSS from "csstype";


const Card: React.FC<{
  text: string;
  active: boolean;
  key: number;
  passClicked: (targetID: string) => void;
}> = (props) => {

  const h1Styles: CSS.Properties = {
    borderRadius: "15px",
    background: "rgb(40, 155, 100)",
    width: "100%",
    padding: "5px",
    border: "2px solid rgb(40, 155, 100)",
    color: "white",
    marginTop: "10px",
    textAlign: "center",
  };

  const h1StylesActive: CSS.Properties = {
    borderRadius: "15px",
    background: "rgb(40, 155, 190)",
    width: "100%",
    padding: "5px",
    border: "2px solid rgb(40, 155, 190)",
    color: "white",
    marginTop: "10px",
    textAlign: "center",
  };

  const handleOnClick = () => {
    props.passClicked(props.text);
  };

  return (
    <button style={props.active ? h1Styles : h1StylesActive} onClick={handleOnClick}>
      {props.text}
    </button>
  );
};

export default Card;
