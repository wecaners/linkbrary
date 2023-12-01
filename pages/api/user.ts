import {
  BASE_URL,
  SAMPLE_FOLDER_ENDPOINT,
  SAMPLE_USER_ENDPOINT,
} from "./services/config";

export const getSampleUser = async () => {
  let result;
  try {
    const response = await fetch(`${BASE_URL}${SAMPLE_USER_ENDPOINT}`);
    result = await response.json();
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
  return result;
};

export const getSampleFolder = async () => {
  let result;
  try {
    const response = await fetch(`${BASE_URL}${SAMPLE_FOLDER_ENDPOINT}`);
    result = await response.json();
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
  return result;
};