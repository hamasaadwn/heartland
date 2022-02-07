import {
  LOAD_MAPS_REQUEST,
  LOAD_MAPS_SUCCESS,
  LOAD_MAPS_FAIL,
  REMOVE_FROM_MAPS,
  ADD_MAPS_REQUEST,
  ADD_MAPS_SUCCESS,
  ADD_MAPS_FAIL,
  LOAD_MAP_REQUEST,
  LOAD_MAP_SUCCESS,
  LOAD_MAP_FAIL,
} from "../constants/mapConstants";

export const loadMapsReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_MAPS_REQUEST:
      return { loading: true };
    case LOAD_MAPS_SUCCESS:
      return { loading: false, maps: action.payload };
    case LOAD_MAPS_FAIL:
      return { loading: false, errors: action.payload };
    case REMOVE_FROM_MAPS:
      return {
        loading: false,
        maps: state.maps.filter((p) => p._id !== action.payload),
      };
    default:
      return state;
  }
};

export const loadMapReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_MAP_REQUEST:
      return { loading: true };
    case LOAD_MAP_SUCCESS:
      return { loading: false, map: action.payload };
    case LOAD_MAP_FAIL:
      return { loading: false, errors: action.payload };
    default:
      return state;
  }
};

export const addMapsReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_MAPS_REQUEST:
      return { loading: true };
    case ADD_MAPS_SUCCESS:
      return { loading: false, maps: action.payload };
    case ADD_MAPS_FAIL:
      return { loading: false, errors: action.payload };
    default:
      return state;
  }
};
