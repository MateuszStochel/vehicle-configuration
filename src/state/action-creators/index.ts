import { Dispatch } from "redux";
import axios from "axios";

import { ActionType } from "../action-types";
import { Action } from "../actions";

export const searchVehicle = (value: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_VEHICLE,
    });
    try {
      const vehicleConfiguration = await axios.get(
        `https://vehicle-configuration.herokuapp.com/configuration/${value}`
      );
      const vahicleData = await axios.get(
        `https://vehicle-configuration.herokuapp.com/vehicle/${vehicleConfiguration.data.vehicleId}`
      );
      dispatch({
        type: ActionType.SEARCH_VEHICLE_SUCCESS,
        payload: { ...vehicleConfiguration.data, ...vahicleData.data },
      });
    } catch (err) {
      dispatch({ type: ActionType.SEARCH_VEHICLE_ERROR });
    }
  };
};
