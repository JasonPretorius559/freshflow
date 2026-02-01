// Base URL for your .NET backend
const BASE_URL = 'http://localhost:5001/api';

export const ENDPOINTS = {
  login: `${BASE_URL}/auth/user/login`,
  register: `${BASE_URL}/auth/user/register`,

  intakes : `${BASE_URL}/intakes`,
  uploadPoFile : `${BASE_URL}/intakes/uploadPoFile`,
  getLoadedPoFiles: `${BASE_URL}/intakes/getLoadedPoFiles`
};

export default ENDPOINTS;
