import {
  LOAD_CONTACT_REQUEST,
  LOAD_CONTACT_SUCCESS,
  LOAD_CONTACT_FAIL,
  ADD_TO_CONTACTS,
  REMOVE_FROM_CONTACTS,
} from "../constants/contactConstants";

export const loadContactReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_CONTACT_REQUEST:
      return { loading: true };
    case LOAD_CONTACT_SUCCESS:
      return { loading: false, contacts: action.payload };
    case LOAD_CONTACT_FAIL:
      return { loading: false, errors: action.payload };
    case ADD_TO_CONTACTS:
      return { ...state, contacts: [action.payload, ...state.contacts] };
    case REMOVE_FROM_CONTACTS:
      return {
        loading: false,
        contacts: state.contacts.filter((c) => c._id !== action.payload),
      };
    default:
      return state;
  }
};
