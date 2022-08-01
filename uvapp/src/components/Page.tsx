import * as React from "react";
import { useEffect, useState } from "react";
import CityList from "./CityList";
import {
  BORDERRADIUS,
  CITY,
  DARKBLUE,
  DUMMYRESPONSE,
  ERROR,
  GREY,
  HEADLINE,
  LOADING,
} from "../Constants";
import Response from "./Response";
import ResponseCard from "./ResponseCard";
import useHttp from "../hooks/use-Http";
import useSelection from "../hooks/use-Selection";
import Description from "./Description";
import CSS from "csstype";

const Page: React.FC = () => {
  const divOuterStyle: CSS.Properties = {
    borderRadius: BORDERRADIUS,
    background: GREY,
    color: "white",
    width: "100%",
    overflow:"auto",
    padding: "10px",
    boxSizing: "border-box",
    display: "inline-block",
  };
  const divLeft: CSS.Properties = {
    float: "left",
    width: "20%",
    height: "100%",
    boxSizing: "border-box",
  };
  const divRight: CSS.Properties = {
    float: "right",
    width: "79%",
    height: "100%",
    marginLeft: "10px",
    boxSizing: "border-box",
  };
  const divLoading: CSS.Properties = {
    borderRadius: BORDERRADIUS,
    background: DARKBLUE,
    float: "left",
    width: "100%",
    height: "90%",
    textAlign: "center",
  };

  interface ITypes {
    name: string;
    clicked: boolean;
  }

  const [response, setResponse] = useState(DUMMYRESPONSE);
  const [selection, setSelection] = useState({
    name: localStorage.getItem(CITY) !== null ? localStorage.getItem(CITY) : "",
  });
  const [cities, setCities] = useState(Array<ITypes>());
  const [isLoading, setIsLoading] = useState(0); //0 loading, 1 success, 2 error

  const handleClick = (id: string) => {
    let changeCities = JSON.parse(JSON.stringify(cities));
    let selected = { name: "" };
    changeCities.forEach((element: any) => {
      element.clicked = false;
      if (element.name === id) {
        element.clicked = true;
        selected.name = element.name;
        localStorage.setItem(CITY, selected.name);
      }
    });
    setCities(() => {
      return changeCities;
    });
    setSelection(() => {
      return selected;
    });
  };

  // let url =
  //   "https://cors-anywhere.herokuapp.com/https://opendata.dwd.de/climate_environment/health/alerts/uvi.json";

  // useEffect(() => {
  //   let isActive = true;
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (isActive) {
  //         setIsLoading(1);
  //         var responseString = JSON.stringify(data);
  //         var responseJSON = JSON.parse(responseString);
  //         var contentArray = responseJSON.content;
  //         let outputArrayCities = [];

  //         contentArray.forEach((element) => {
  //           if (element.city !== -1) {
  //             var add = {
  //               name: element.city,
  //               clicked: false,
  //             };
  //             outputArrayCities.push(add);
  //           }
  //         });
  //         if (localStorage.getItem(CITY) !== null) {
  //           outputArrayCities.forEach((element) => {
  //             if (element.name === localStorage.getItem(CITY)) {
  //               element.clicked = true;
  //             }
  //           });
  //         }
  //         setCities(() => {
  //           return outputArrayCities;
  //         });
  //         setResponse(() => {
  //           return data;
  //         });
  //       }
  //     })
  //     .catch((error) => {
  //       setIsLoading(2);
  //       console.log(error.message);
  //     });
  //   return () => {
  //     isActive = false;
  //   };
  // }, []);

  useHttp(setCities, setResponse, setIsLoading);
  let selectionHook = useSelection(selection, response); //TODO

  let list = (
    <CityList
      data={cities}
      selection={selection}
      passClicked={handleClick}
    ></CityList>
  );

  let selectValueDiv: CSS.Properties = {
    borderRadius: BORDERRADIUS,
    background: DARKBLUE,
    color: "white",
    width: "100%",
    height: "25%",
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingTop: "35px",
    marginTop: "10px",
    textAlign: "center",
  };

  const renderSwitch = () => {
    switch (isLoading) {
      case 0:
        return <div style={divLoading}>{LOADING}</div>;
      case 1:
        return (
          <div style={{ height: "360px" }}>
            <div style={divLeft}>{list}</div>
            <div style={divRight}>
              <Description />
              <div style={{ height: "25%" , boxSizing: "border-box" }}>
                {selection.name === "" && (
                  <div style={selectValueDiv}>Select a city</div>
                )}
                {selection.name !== "" && (
                  <Response values={selectionHook.selectedValues}></Response>
                )}
              </div>
            </div>
          </div>
        );
      case 2:
        return <div style={divLoading}>{ERROR}</div>;
    }
  };

  return (
    <div style={divOuterStyle}>
      <ResponseCard text={HEADLINE}></ResponseCard>
      {renderSwitch()}
    </div>
  );
};

export default Page;
