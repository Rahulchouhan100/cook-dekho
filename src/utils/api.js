import axios from "axios";

const apiUrl = "https://a441-2406-7400-81-c0ba-8052-c8ed-cc8-9f.ngrok-free.app";
const accessToken = `${localStorage.getItem("access")}`;
const authToken = `${accessToken}`;

const apiCall = async (method, endpoint, data, config = {}) => {
  const url = `${apiUrl}/${endpoint}`;

  const defaultConfig = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
      "ngrok-skip-browser-warning": "69420",
      // Add any additional headers as needed
      // 'Authorization': `Bearer ${authToken}`,
    },
  };

  // Include authentication token in headers if provided
  // if (authToken) {
  //   defaultConfig.headers["Authorization"] = `Bearer ${authToken}`;
  // }
//   console.log(authToken);

  try {
    const response = await axios({
      method,
      url,
      data,
      ...defaultConfig,
      ...config,
    });

    if (response.status >= 200 && response.status < 300) {
      return response.data; // Corrected to return response.data
    } else {
      const errorDetails = {
        status: response.status,
        message: response.data.message || "Something went wrong",
      };
      throw new Error(JSON.stringify(errorDetails));
    }
  } catch (error) {
    console.error("API Error:", error.message);
    throw error; // Rethrow the error to propagate it up
  }
};

export default apiCall;
