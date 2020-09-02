import {
  IS_AUTHENTICATED,
  SET_ALERT,
  SET_TOKEN
} from './actionTypes';

export const setToken = data => ({type: SET_TOKEN, data});
export const isAuthenticated = data => ({type: IS_AUTHENTICATED});

export const setAlert = data => ({type: SET_ALERT});
export const clearAlert = () => ({
  type: SET_ALERT,
  data: {msg: '', msgList: [], type: '', show: false, dismissible: false}
});
