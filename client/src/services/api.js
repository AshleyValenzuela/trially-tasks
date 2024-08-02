import axios from 'axios';

const api = axios.create({
  baseURL: typeof window === 'undefined' // Check if code is running on browser or server side
    ? process.env.NEXT_PUBLIC_API_URL_SERVER_SIDE // Use server-side URL
    : process.env.NEXT_PUBLIC_API_URL_CLIENT_SIDE // Use client-side URL
});

api.interceptors.response.use(
  response => response,
  error => {
    console.error('API error:', error);
    return Promise.reject(error);
  }
);

export const createTask = async (taskData, userId) => {
  try {
    const response = await api.post(`/tasks/?user_id=${userId}`, taskData);
    return response.data;
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
};

export const fetchTasks = async (userId) => {
  const response = await api.get(`/tasks/?user_id=${userId}`);
  return response.data;
};

export const updateTask = async (taskId, taskData) => {
  const response = await api.put(`/tasks/${taskId}`, taskData);
  return response.data;
};

export const deleteTask = async (taskId) => {
  const response = await api.delete(`/tasks/${taskId}`);
  return response.data;
};

export const registerUser = async (userData) => {
  const response = await api.post(`/users/`, userData);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await api.post(`/auth/login`, userData);
  return response.data;
};
