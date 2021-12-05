import axios from "axios";

export const getPeopleService = () => {
  return axios.get("/people");
};

export const getAgeAverageService =() => {
  return axios.get("/people/average");
}

export const getPersonService = (id) => {
  return axios.get(`/people/${id}`);
};

export const createPersonService = (person) => {
  return axios.post("/people", person);
};

export const updatePersonService = (person) => {
  return axios.put(`/people/${person.id}`, person);
};

export const deletePersonService = (id) => {
  return axios.delete(`/people/${id}`);
};
