import {
  IS_AUTHENTICATED,
  SET_ALERT,
  SET_TOKEN
} from '../actions/actionTypes';

let initialState = {
  token: "",
  isAuthenticated: false,
  setAlert: {
    msg: "",
    msgList: [],
    type: "",
    show:false,
    dismissible: false
  }
};

const configReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {...state, token: action.data};
    case IS_AUTHENTICATED:
      return {...state, isAuthenticated: action.data};
    case SET_ALERT:
      return {...state,
        alert: {
          ...state.alert,
          ...action.data
        }};
    default:
      return state;
  }
};

export default configReducer;
