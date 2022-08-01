import { CITY, DUMMYRESPONSE } from "../Constants";
import { useEffect } from "react";

interface ITypes {
  name: string;
  clicked: boolean;
}

const useHttp = (
  setCities: React.Dispatch<React.SetStateAction<ITypes[]>>,
  setResponse: React.Dispatch<React.SetStateAction<any>>,
  setIsLoading: React.Dispatch<React.SetStateAction<number>>
) => {
  let url =
    "https://cors-anywhere.herokuapp.com/https://opendata.dwd.de/climate_environment/health/alerts/uvi.json";

  useEffect(() => {
    let isActive = true;
    // fetch(url)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (isActive) {
    //       setIsLoading(1);
    //       var responseString = JSON.stringify(data);
    //       var responseJSON = JSON.parse(responseString);
    //       var contentArray = responseJSON.content;
    //       let outputArrayCities: Array<any>;
    //       outputArrayCities = [];

    //       contentArray.forEach((element: any) => {
    //         if (element.city !== -1) {
    //           var add = {
    //             name: element.city,
    //             clicked: false,
    //           };
    //           outputArrayCities.push(add);
    //         }
    //       });
    //       if (localStorage.getItem(CITY) !== null) {
    //         outputArrayCities.forEach((element) => {
    //           if (element.name === localStorage.getItem(CITY)) {
    //             element.clicked = true;
    //           }
    //         });
    //       }
    //       setCities(() => {
    //         return outputArrayCities;
    //       });
    //       setResponse(() => {
    //         return data;
    //       });
    //     }
    //   })
    //   .catch((error) => {
    //     setIsLoading(2);
    //     console.log(error.message);
    //   });
    if (isActive) {
      setIsLoading(1);
      var responseString = JSON.stringify(DUMMYRESPONSE);
      var responseJSON = JSON.parse(responseString);
      var contentArray = responseJSON.content;
      let outputArrayCities: Array<any>;
      outputArrayCities = [];

      contentArray.forEach((element: any) => {
        if (element.city !== -1) {
          var add = {
            name: element.city,
            clicked: false,
          };
          outputArrayCities.push(add);
        }
      });
      if (localStorage.getItem(CITY) !== null) {
        outputArrayCities.forEach((element) => {
          if (element.name === localStorage.getItem(CITY)) {
            element.clicked = true;
          }
        });
      }
      setCities(() => {
        return outputArrayCities;
      });
      setResponse(() => {
        return DUMMYRESPONSE;
      });
    }
    return () => {
      isActive = false;
    };
  }, []);

  return {};
};
export default useHttp;
