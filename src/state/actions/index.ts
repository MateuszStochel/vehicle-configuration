import { DataVehicle } from "../../constans/vehicle.types";
import { ActionType } from "../action-types";

interface SearchVehicleAction {
  type: ActionType.SEARCH_VEHICLE;
}

interface SearchVehicleSuccessAction {
  type: ActionType.SEARCH_VEHICLE_SUCCESS;
  payload: DataVehicle;
}

interface SearchVehicleErrorAction {
  type: ActionType.SEARCH_VEHICLE_ERROR;
}

export type Action =
  | SearchVehicleAction
  | SearchVehicleSuccessAction
  | SearchVehicleErrorAction;
