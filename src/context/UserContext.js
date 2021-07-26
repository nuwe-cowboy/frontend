import React from "react";
import PropTypes from "prop-types";
import UserActions from "./UserActions";
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

const UserStateContext = React.createContext();
const UserDispatchContext = React.createContext();

function userReducer(state, action) {
  switch (action.type) {
    case REQUEST_AUTH:
      return { ...state, authRequested: true };
    case UNREQUEST_AUTH:
      return { ...state, authRequested: false };
    case LOG_IN_START:
      return { ...state, authLoading: true };
    case SIGN_UP_START:
      return { ...state, authLoading: true };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        authError: null,
        authLoading: false,
        authRequested: false,
      };
    case SIGN_UP_FAIL:
      return { ...state, authLoading: false, authError: action.payload };
    case LOG_IN_FAIL:
      return { ...state, authLoading: false, authError: action.payload };
    case LOG_OFF:
      return { ...state, loggedIn: false };
    case REMOVE_AUTH_ERROR:
      return { ...state, authError: null };
    default:
      return state;
  }
}

const INITIAL_STATE = {
  loggedIn: false,
  authError: null,
  authLoading: null,
  name: null,
  authRequested: false,
};

function UserProvider({ children }) {
  // este código convierte las acciones de UserActions en acciones despachadas,
  // por lo que no hay que importar dispatch ahí donde se usen
  const [state, dispatch] = React.useReducer(userReducer, INITIAL_STATE);

  const dispatchedFunctions = {};
  const actions = Object.keys(UserActions);
  for (let i = 0; i < actions.length; i += 1) {
    const action = UserActions[actions[i]];
    dispatchedFunctions[actions[i]] = action(dispatch);
  }

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatchedFunctions}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

function useUserState() {
  const context = React.useContext(UserStateContext);
  if (context === undefined) {
    throw new Error("useUserState must be used within a UserProvider");
  }
  return context;
}

function useUserActions() {
  const context = React.useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error("useUserActions must be used within a UserProvider");
  }
  return context;
}

export { UserProvider, useUserState, useUserActions };
