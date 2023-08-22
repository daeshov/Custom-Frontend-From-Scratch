import axios from 'axios';

// Define a function to fetch the API data
export async function fetchData(apiUrl) {
  try {
    const response = await axios.get(apiUrl);
    const data = response.data;  // Assuming the response is in JSON format
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }

}
