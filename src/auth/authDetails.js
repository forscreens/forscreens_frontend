
// 1 function isLoggedIn => if token is stored in localstorage
export const isLoggedIn = () => {
  let data = localStorage.getItem('data');
  if (data != null) {
    return true;
  } else {
    return false;
  }
};

// 2 function doLogin => data => set to token in localstorage

export const doLogin = (data, next) => {
  localStorage.setItem('data', JSON.stringify(data));
  next();
};

// 3 function doLogout => remove data from localstorage

export const doLogout = () => {
  localStorage.removeItem('data');
  localStorage.removeItem('isActorCreated');
  window.location.href = '/';
};

// get currentUser

export const getCurrentUserDetails = () => {
  if (isLoggedIn) {
    return JSON.parse(localStorage.getItem('data'));
  } else {
    return false;
  }
};

export const isActor = () => {
  return JSON.parse(localStorage.getItem('data')).roles === 'ACTOR';
};

export const isActorCreated = () => {
  if (JSON.parse(localStorage.getItem('data')).actorId == null) {
    return localStorage.getItem("isActorCreated")
  } else {
    return true;
  }
};

export const getUserId = () => {
  console.log("JSON.parse(localStorage.getItem('data')).userId : "+JSON.parse(localStorage.getItem('data')).id)
  return JSON.parse(localStorage.getItem('data')).id;
};
