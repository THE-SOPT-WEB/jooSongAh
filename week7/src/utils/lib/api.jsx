import { reqAPI } from ".";

export const getDatasAPI = () => {
  return reqAPI.get("/letter");
};

export const getDataAPI = () => {
  return reqAPI.get("/letter/:letterId"); //근디 이거 아닌거같은디
};

export const postAPI = (postBody) => {
  return reqAPI.get("/letter", postBody);
};

export const fetchAPI = () => {
  return reqAPI.get("/letter/:letterId"); //근디 이거 아닌거같은디
};
