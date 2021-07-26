import axios from "axios";
import { apiUser } from "../helpers/endpoints";
import {
  LOG_IN_SUCCESS,
  LOG_OFF,
  LOG_IN_FAIL,
  LOG_IN_START,
  SIGN_UP_FAIL,
  SIGN_UP_START,
  REMOVE_AUTH_ERROR,
  REQUEST_AUTH,
  UNREQUEST_AUTH,
} from "./types";

function requestAuth(dispatch) {
  return function requestAuthDispatch() {
    dispatch({ type: REQUEST_AUTH });
  };
}

function unRequestAuth(dispatch) {
  return function unRequestAuthDispatch() {
    dispatch({ type: UNREQUEST_AUTH });
  };
}

function signIn(dispatch) {
  return async function signInDispatch(email = "", password = "") {
    dispatch({ type: LOG_IN_START });
    try {
      // const { data } = await axios.get(`login endpoint`, {
      //   params: { email, password },
      // });
      const data = "alex";
      dispatch({ type: LOG_IN_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: LOG_IN_FAIL, payload: error.message });
    }
  };
}

function signUp(dispatch) {
  return async function signUpDispatch(name, lastName, password, email) {
    dispatch({ type: SIGN_UP_START });
    try {
      const data = await axios.post(`${apiUser}`, {
        Headers: { Accept: "*/*" },
        User: { name, lastName, password, email },
      });
      console.log(data);
      signIn(dispatch)(email, password);
    } catch (error) {
      dispatch({ type: SIGN_UP_FAIL, payload: error.message });
    }
  };
}

function logOff(dispatch) {
  return async function logOffDispatch() {
    dispatch({ type: LOG_OFF });
  };
}

function removeAuthError(dispatch) {
  return function removeAuthErrorDispatch() {
    dispatch({ type: REMOVE_AUTH_ERROR });
  };
}

export default {
  requestAuth,
  unRequestAuth,
  signIn,
  signUp,
  logOff,
  removeAuthError,
};
