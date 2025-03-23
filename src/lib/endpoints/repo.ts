import apiClient from "../apiCLient";

export const repoApi = async () => {
  try {
    const response = await apiClient.get("/repos");
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(`${error}`);
  }
};
