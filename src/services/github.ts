import axios from "axios";
import {
  GITHUBRepositoryQueryOps,
  GITHUBRepositorySearchParams,
  GITHUBRequest,
  GITHUBRequestType,
  Operators,
} from "../utilities/types";

const callGITHUBApi = async (request: GITHUBRequest) => {
  const { params, method, endpoint } = request;
  try {
    const { data } = await axios.request({
      baseURL: "https://api.github.com",
      url: `${endpoint}?${params}`,
      method,
    });

    return data;
  } catch (ex) {
    console.log("Error occurred while calling a GITHUB API...");
    console.log(ex.response.data);
  }
};

const getOperator = (operator: Operators) => {
  return GITHUBRepositoryQueryOps[operator];
};

const sanitizeForGithubQuery = (params) => {
  const sanitzedQuery = [];
  Object.keys(params).forEach((param) => {
    sanitzedQuery.push(
      `${param}${getOperator(params[param].op)}${params[param].value}`
    );
  });

  return sanitzedQuery.join("+");
};

const sanitizeForQuery = (params) => {
  const sanitzedQuery = [];
  Object.keys(params).forEach((param) => {
    sanitzedQuery.push(`${param}=${params[param]}`);
  });

  return sanitzedQuery.join("&");
};

export const fetchPublicRepositories = async (
  params: GITHUBRepositorySearchParams
) => {
  const { sort, per_page, query } = params;

  const sanitizedQuery = sanitizeForGithubQuery(query);

  return callGITHUBApi({
    endpoint: "/search/repositories",
    method: GITHUBRequestType.GET,
    params: `q=${sanitizedQuery}&${sanitizeForQuery({ sort, per_page })}`,
  });
};
