import {
  LOAD_EMERGENCY_REQUEST,
  LOAD_EMERGENCY_SUCCESS,
  LOAD_EMERGENCY_FAIL,
  ADD_TO_EMERGENCY,
} from "../constants/emergencyConstants";

export const loadEmergensiesReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_EMERGENCY_REQUEST:
      return { loading: true };
    case LOAD_EMERGENCY_SUCCESS:
      return { loading: false, emergencies: action.payload };
    case LOAD_EMERGENCY_FAIL:
      return { loading: false, errors: action.payload };
    case ADD_TO_EMERGENCY:
      return { ...state, emergencies: [action.payload, ...state.emergencies] };
    //   case REMOVE_FROM_CONTACTS:
    //     return {
    //       loading: false,
    //       contacts: state.contacts.filter((c) => c._id !== action.payload),
    //     };
    default:
      return state;
  }
};
