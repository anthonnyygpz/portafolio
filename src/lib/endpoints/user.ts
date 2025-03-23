import apiClient from "../apiCLient";

export const userApi = async () => {
  try {
    const response = await apiClient.get("");
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error get user: " + error);
  }
};
