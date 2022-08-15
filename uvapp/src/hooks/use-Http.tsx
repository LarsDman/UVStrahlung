import { CITY } from "../Constants";
import { useEffect } from "react";

interface ITypes {
  name: string;
  clicked: boolean;
}

interface IResponse {
  city: string;
  forecast: {
    today: number;
    tomorrow: number;
    dayafter_to: number;
  };
}

const useHttp = (
  setCities: React.Dispatch<React.SetStateAction<ITypes[]>>,
  setResponse: React.Dispatch<React.SetStateAction<any>>,
  setIsLoading: React.Dispatch<React.SetStateAction<number>>
) => {
  
  useEffect(() => {
    let isActive = true;

    fetch("/express_backend")
      .then((response) => response.json())
      .then((data) => {
        if (isActive) {
          setIsLoading(1);
          var responseString = JSON.stringify(data);
          var responseJSON = JSON.parse(responseString);
          var contentArray = responseJSON.content as [IResponse];
          let outputArrayCities: Array<ITypes>;
          outputArrayCities = [];

          console.log(contentArray);

          contentArray.forEach((element) => {
            if (element.city !== "-1") {
              var add = {
                name: element.city,
                clicked: false,
              } as ITypes;
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
            return data;
          });
        }
      })
      .catch((error) => {
        setIsLoading(2);
        console.log(error.message);
      });
    return () => {
      isActive = false;
    };
  }, []);

  return {};
};
export default useHttp;
