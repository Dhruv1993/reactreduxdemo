import { createReducer } from "../reducer/reducerUtil";

import { INCREMENT_COUNTER, DECREMENT_COUNTER , DISABLED_BUTTON, ENABLE_BUTTON} from "./reducerConstants";


const initialState = {
  data: 0,
  sibat: 2,
  winnie: 3,
  jamie: 4,
  enable: false,
 
};

// doesn't have to be the same name as actions. This state will be equal to initialState in createReducer
export const incrementCounter = (state, payload) => {
  return { ...state, data: state.data + 1 };
};

export const decrementCounter = (state, payload) => {
  return { ...state, data: state.data - 1 };
};
export const disabledButton =(state) => {
return {...state, enable: false }
}
export const enableButton = (state) => {
  return {...state, enable: true}
}
export default createReducer(initialState, {
  [INCREMENT_COUNTER]: incrementCounter,
  [DECREMENT_COUNTER]: decrementCounter,
  [DISABLED_BUTTON]: disabledButton,
  [ENABLE_BUTTON]: enableButton
});
