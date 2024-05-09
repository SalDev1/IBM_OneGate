import axios from "axios";

const API_URL = "http://localhost:4000/query";

// Submit contact form
const addQuery = async (queryData: any) => {
  try {
    const response = await axios.post(API_URL, queryData);
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

const getQueries = async (user: any) => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error: any) {
    throw error.response.data;
  }
};

const queryService = {
  addQuery,
  getQueries,
};

export default queryService;
