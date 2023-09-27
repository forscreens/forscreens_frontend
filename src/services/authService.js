import { axiosCall } from './Helper';

// login
export const loginUser = (authRequest) => {
  return axiosCall.post('/api/v1/user/login', authRequest).then((result) => result.data);
};

// signup
export const createUser = (userRequest) => {
  return axiosCall.post('/api/v1/user/create', userRequest).then((result) => result.status);
};

export const createActor = (data) => {
  console.log(data);
  return axiosCall.post('/api/v1/actor/create', data).then((result) => result.status);
};

export const getActors = () => {
  return axiosCall.get('/api/v1/actor/get/all').then((result) => result.data);
};

export const getActor = (userId) => {
  return axiosCall.get('/api/v1/actor/get', { params: { 'userId': userId }}).then((result) => result.data);
};

export const updateActor = (data) => {
  return axiosCall.put('/api/v1/actor/update', data).then((result) => result.data);
};


