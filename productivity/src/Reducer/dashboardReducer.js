import { SETUP_DASHBOARD } from "../Constant/actionTypes";

const defaultState = {
  todos: [],
  expenses: []
};

const setupDashboard = (state, action) => ({
  ...state,
  ...action.payload,
});
   
export const dashboardReducer = (state = defaultState, action) => {
  const reducerMapper = {
      [SETUP_DASHBOARD]: setupDashboard
  }[action.type];

  return reducerMapper ? reducerMapper(state, action) : state;
};