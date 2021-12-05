import { useCallback, useContext, useState } from "react";
import Context from "../context/PeopleContext";
import {
  getPeopleService,
  createPersonService,
  getAgeAverageService,
} from "../services/peopleService";

export default function usePeople() {
  const { people, setPeople } = useContext(Context);
  const [isLoading, setIsLoading] = useState(false);

  const getPeople = useCallback(async () => {
    setIsLoading(true);
    getPeopleService().then((response) => {
      setPeople(response.data);
      setIsLoading(false);
    });
  }, [setPeople]);

  const createPerson = useCallback(
    (person) => {
      setIsLoading(true);
      return createPersonService(person).then((response) => {
        setPeople([...people, response.data]);
        setIsLoading(false);
      });
    },
    [people, setPeople, setIsLoading]
  );

  const getAgeAverage = useCallback(() => {
    return getAgeAverageService().then((response) => {
      return response.data;      
    });
  }, []);

  return {
    people,
    isLoading,
    getPeople,
    createPerson,
    getAgeAverage,
  };
}
