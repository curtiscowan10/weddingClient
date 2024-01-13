import {
  TOGGLE_DRAWER_OPEN,
  TOGGLE_DARK_MODE,
  DISPLAY_SNACKBAR,
  RESET_SNACKBAR,
} from "./uiTypes";

const INITIAL_STATE = {
  drawerOpen: false,
  darkMode: false,
  message: null,
  snackbarType: null,
};

function onToggleDrawer(state) {
  return {
    ...state,
    drawerOpen: !state.drawerOpen,
  };
}

function onToggleDarkMode(state) {
  return {
    ...state,
    darkMode: !state.darkMode,
  };
}

function onSnackbarDisplay(state, { snackbarType, message }) {
  return {
    ...state,
    message,
    snackbarType,
  };
}

function onSnackbarReset(state) {
  return {
    ...state,
    message: null,
    snackbarType: null,
  };
}

export default function uiReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case TOGGLE_DRAWER_OPEN:
    return onToggleDrawer(state, action);
  case TOGGLE_DARK_MODE:
    return onToggleDarkMode(state, action);
  case DISPLAY_SNACKBAR:
    return onSnackbarDisplay(state, action);
  case RESET_SNACKBAR:
    return onSnackbarReset(state, action);
  default:
    return state;
  }
}
