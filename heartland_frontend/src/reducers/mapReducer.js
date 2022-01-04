import {
  LOAD_MAPS_REQUEST,
  LOAD_MAPS_SUCCESS,
  LOAD_MAPS_FAIL,
} from "../constants/mapConstants";

export const loadMapsReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_MAPS_REQUEST:
      return { loading: true };
    case LOAD_MAPS_SUCCESS:
      return { loading: false, maps: action.payload };
    case LOAD_MAPS_FAIL:
      return { loading: false, errors: action.payload };
    default:
      return state;
  }
};
