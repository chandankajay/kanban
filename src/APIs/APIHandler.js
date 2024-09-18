import axios from 'axios';
const API_BASE_URL = 'https://api.quicksell.co/';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchKanbanData = async () => {
    const endpoint = 'v1/internal/frontend-assignment'
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
