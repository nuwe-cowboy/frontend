import axios from "axios";
import { apiArticles } from "../helpers/endpoints";
import { apiEvents } from "../helpers/endpoints";
import {
  GET_EVENTS_START,
  GET_EVENTS_SUCCESS,
  GET_EVENTS_FAIL,
  GET_NEWSLETTERS_START,
  GET_NEWSLETTERS_SUCCESS,
  GET_NEWSLETTERS_FAIL,
  REMOVE_CONTENT_ERROR,
} from "./types";

function getNewsletterList(dispatch) {
  return async function getNewsletterListDispatch() {
    dispatch({ type: GET_NEWSLETTERS_START });
    try {
      const { data } = await axios.get(`${apiArticles}`);
      dispatch({ type: GET_NEWSLETTERS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_NEWSLETTERS_FAIL, payload: error.message });
    }
  };
}

function getEventsFromAPI(dispatch) {
  return async function getEventsListDispatch() {
    dispatch({ type: GET_EVENTS_START });
    try {
      const { data } = await axios.get(`${apiEvents}`);
      dispatch({ type: GET_EVENTS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_EVENTS_FAIL, payload: error.message });
    }
  };
}

// function requestAuth(dispatch) {
//   return function requestAuthDispatch() {
//     dispatch({ type: REQUEST_AUTH });
//   };
// }

// function unRequestAuth(dispatch) {
//   return function unRequestAuthDispatch() {
//     dispatch({ type: UNREQUEST_AUTH });
//   };
// }

// function signIn(dispatch) {
//   return async function signInDispatch(email = "", password = "") {
//     dispatch({ type: LOG_IN_START });
//     try {
//       // const { data } = await axios.get(`login endpoint`, {
//       //   params: { email, password },
//       // });
//       const data = "alex";
//       dispatch({ type: LOG_IN_SUCCESS, payload: data });
//     } catch (error) {
//       dispatch({ type: LOG_IN_FAIL, payload: error.message });
//     }
//   };
// }

// function signUp(dispatch) {
//   return async function signUpDispatch(username, email, password) {
//     dispatch({ type: SIGN_UP_START });
//     try {
//       await axios.get(`register endpoint`, {
//         params: { username, email, password },
//       });
//       signIn(dispatch)(email, password);
//     } catch (error) {
//       dispatch({ type: SIGN_UP_FAIL, payload: error.message });
//     }
//   };
// }

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
  getNewsletterList,
  getEventsFromAPI,
  logOff,
  removeAuthError,
};
