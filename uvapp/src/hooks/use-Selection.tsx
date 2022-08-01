import { DUMMYRESPONSE } from "../Constants";
import { useState, useEffect } from "react";

interface ITypes {
  name: string;
  clicked: boolean;
}

const useSelection = (
  selection: { name: string | null },
  response: any
) => {
  const [selectedValues, setSelectedValues] = useState({
    todayValue: "0",
    tomorrowValue: "0",
    afterTomorrowValue: "0",
  });

  useEffect(() => {
    if (selection.name !== "") {
      let today = 0;
      let tomorrow = 0;
      let afterTomorrow = 0;
      response.content.forEach((element: any) => {
        if (element.city === selection.name) {
          today = element.forecast.today;
          tomorrow = element.forecast.tomorrow;
          afterTomorrow = element.forecast.dayafter_to;
        }
      });
      setSelectedValues(() => {
        return {
          todayValue: today.toString(),
          tomorrowValue: tomorrow.toString(),
          afterTomorrowValue: afterTomorrow.toString(),
        };
      });
    }
  }, [selection, response]);

  return {
    selectedValues,
  };
};

export default useSelection;
