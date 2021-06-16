import axios from "axios";

const reqData = {
  method: "GET",
  url: "",
  queryParams: {},
  formData: {},
  bodyParams: {},
  pathParams: [],
  data: {},
};

function makeHeaders() {
  const headers = {
    "Content-Type": "application/json",
  };
  return headers;
}

function makeHeaderWithToken(token) {
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  return headers;
}

export function defaultApi(URL, method, details) {
  const token = localStorage.getItem("access_token");

  // axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
  // axios.defaults.xsrfCookieName = 'csrftoken';
  // axios.defaults.withCredentials = true;

  const api = axios.create({
    baseURL: URL,
    headers: token ? makeHeaderWithToken(token) : makeHeaders(),
    withCredentials: true,
  });

  let requestDetails = { ...reqData };
  requestDetails.url = URL;
  requestDetails.method = method;
  requestDetails.data = details;

  return apiCall(api, requestDetails)
    .then((response) => response)
    .catch((error) => error);
}

async function apiCall(api, requestDetails) {
  let apiReturn = {
    response: undefined,
    error: undefined,
  };

  try {
    const data = await api(requestDetails);
    apiReturn = {
      ...apiReturn,
      response: data,
    };
  } catch (error) {
    apiReturn = { ...apiReturn, error: error && error.response };
  }

  return apiReturn;
}
