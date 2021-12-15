import { DataVehicle } from "../../constant/vehicle.types";
import { ActionType } from "../action-types";
import { Action } from "../actions";

interface VehicleState {
  isLoading: boolean;
  isError: boolean;
  data: DataVehicle | null;
}

const initialState = {
  isLoading: false,
  isError: false,
  data: null,
};

const reducer = (
  state: VehicleState = initialState,
  action: Action
): VehicleState => {
  switch (action.type) {
    case ActionType.SEARCH_VEHICLE:
      return { isLoading: true, isError: false, data: null };
    case ActionType.SEARCH_VEHICLE_SUCCESS:
      return { isLoading: false, isError: false, data: action.payload };
    case ActionType.SEARCH_VEHICLE_ERROR:
      return { isLoading: false, isError: true, data: null };
    default:
      return state;
  }
};

export default reducer;
