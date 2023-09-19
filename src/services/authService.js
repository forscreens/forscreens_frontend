import { axiosCall } from './Helper';

// login
export const loginUser = (authRequest) => {
  return axiosCall.post('/api/v1/user/login', authRequest).then((result) => result.data);
};

// signup
export const createUser = (userRequest) => {
  return axiosCall.post('/api/v1/user/create', userRequest).then((result) => result.status);
};
