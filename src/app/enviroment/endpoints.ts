// Base URL for your .NET backend
const BASE_URL = 'http://localhost:5001/api';

export const ENDPOINTS = {
  login: `${BASE_URL}/auth/user/login`,
  register: `${BASE_URL}/auth/user/register`,
};

export default ENDPOINTS;
