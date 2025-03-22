import axios from 'axios';

// Define the backend URL based on the environment
const apiUrl =
    window.location.hostname === "localhost"
        ? "http://127.0.0.1:5174/api/internships"  // Local backend
        : `${import.meta.env.VITE_BACKEND_URL}/internships`;  // Deployed backend

// Create an axios instance with the base URL
const axiosInstance = axios.create({
  baseURL: apiUrl,
});

// Example API request function
export const fetchData = async () => {
  try {
    const response = await axiosInstance.get('/endpoint'); // /api/endpoint
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default axiosInstance;

