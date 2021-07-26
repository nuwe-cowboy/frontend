import React from "react";
import PropTypes from "prop-types";
import ContentActions from "./ContentActions";
import {
  GET_EVENTS_START,
  GET_EVENTS_SUCCESS,
  GET_EVENTS_FAIL,
  GET_NEWSLETTERS_START,
  GET_NEWSLETTERS_SUCCESS,
  GET_NEWSLETTERS_FAIL,
  REMOVE_CONTENT_ERROR,
} from "./types";

const ContentStateContext = React.createContext();
const ContentDispatchContext = React.createContext();

function contentReducer(state, action) {
  switch (action.type) {
    case GET_EVENTS_START:
      return { ...state, contentLoading: true };
    case GET_EVENTS_SUCCESS:
      return { ...state, contentLoading: false, eventList: action.payload };
    case GET_EVENTS_FAIL:
      return { ...state, contentLoading: false, contentError: action.payload };
    case GET_NEWSLETTERS_START:
      return { ...state, contentLoading: true };
    case GET_NEWSLETTERS_SUCCESS:
      return {
        ...state,
        contentLoading: false,
        newsletterList: action.payload,
      };
    case GET_NEWSLETTERS_FAIL:
      return { ...state, contentLoading: false, contentError: action.payload };
    case REMOVE_CONTENT_ERROR:
      return { ...state, contentError: null };
    default:
      return state;
  }
}

const INITIAL_STATE = {
  contentLoading: false,
  contentError: null,
  newsletterList: null,
  selectedNewsletterIndex: null,
  eventList: null,
  selectedEventIndex: null,
  userRegisteredEvents: null,
};

function ContentProvider({ children }) {
  // este código convierte las acciones de ContentActions en acciones despachadas,
  // por lo que no hay que importar dispatch ahí donde se usen
  const [state, dispatch] = React.useReducer(contentReducer, INITIAL_STATE);

  const dispatchedFunctions = {};
  const actions = Object.keys(ContentActions);
  for (let i = 0; i < actions.length; i += 1) {
    const action = ContentActions[actions[i]];
    dispatchedFunctions[actions[i]] = action(dispatch);
  }

  return (
    <ContentStateContext.Provider value={state}>
      <ContentDispatchContext.Provider value={dispatchedFunctions}>
        {children}
      </ContentDispatchContext.Provider>
    </ContentStateContext.Provider>
  );
}

ContentProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

function useContentState() {
  const context = React.useContext(ContentStateContext);
  if (context === undefined) {
    throw new Error("useContentState must be used within a ContentProvider");
  }
  return context;
}

function useContentActions() {
  const context = React.useContext(ContentDispatchContext);
  if (context === undefined) {
    throw new Error("useContentActions must be used within a ContentProvider");
  }
  return context;
}

export { ContentProvider, useContentState, useContentActions };
