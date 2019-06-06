import { INCREMENT_COUNTER, DECREMENT_COUNTER, DISABLED_BUTTON, ENABLE_BUTTON } from "./reducerConstants";

export const disabledButton = () => {
  return {
    type: DISABLED_BUTTON
  };
}
export const enableButton = () => {
  return {
    type: ENABLE_BUTTON
  }
}
export const incrementCounter = () => {
  return {
    type: INCREMENT_COUNTER
  };
};

export const decrementCounter = () => {
  return {
    type: DECREMENT_COUNTER
  };
};
// fake delay
const delay = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const incrementAsync = () => {
  return async dispatch => {
    dispatch(enableButton());
    await delay(1000);
    dispatch(incrementCounter());
    dispatch(disabledButton());
  };
};

export const decrementAsync = () => {
  return async dispatch => {
    dispatch(enableButton())
    await delay(1000);
    dispatch({ type: DECREMENT_COUNTER }); // this parameter is given as a default parameter
    dispatch(disabledButton());
  };
};
