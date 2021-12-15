import { combineReducers } from "redux";

import vehicleReducer from "./vehicleReducer";

const reducers = combineReducers({
  vehicle: vehicleReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
