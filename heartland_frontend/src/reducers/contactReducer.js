import {
  LOAD_CONTACT_REQUEST,
  LOAD_CONTACT_SUCCESS,
  LOAD_CONTACT_FAIL,
} from "../constants/contactConstants";

export const loadContactReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_CONTACT_REQUEST:
      return { loading: true };
    case LOAD_CONTACT_SUCCESS:
      return { loading: false, contacts: action.payload };
    case LOAD_CONTACT_FAIL:
      return { loading: false, errors: action.payload };
    default:
      return state;
  }
};
