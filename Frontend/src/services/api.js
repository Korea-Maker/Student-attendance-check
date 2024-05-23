import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api';  // Replace with your backend URL

export const login = (userData) => {
  return axios.post(`${API_BASE_URL}/login`, userData);
};

export const register = (userData) => {
  return axios.post(`${API_BASE_URL}/register`, userData);
};

export const fetchAttendance = () => {
  return axios.get(`${API_BASE_URL}/attendance`);
};

export const updateAttendance = (attendanceData) => {
  return axios.post(`${API_BASE_URL}/attendance`, attendanceData);
};

export const fetchSchedule = () => {
  return axios.get(`${API_BASE_URL}/schedule`);
};

export const updateSchedule = (scheduleData) => {
  return axios.post(`${API_BASE_URL}/schedule`, scheduleData);
};
