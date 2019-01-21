import {
  VisibilityFilters,
  SET_VISIBILITY_FILTER
} from "../actions/actionTypes";

const initialState = VisibilityFilters.SHOW_ALL;

export default function visibilityFilter(
  state = initialState,
  action
) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER: {
      return action.payload.filter;
    }
    default:
      return state;
  }
}
