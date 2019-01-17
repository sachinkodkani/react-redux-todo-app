import {
  VisibilityFilters,
  SET_VISIBILITY_FILTER
} from "../actions/actionTypes";

export const visibilityFilter = (
  state = VisibilityFilters.SHOW_ALL,
  action
) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload.filter;
    default:
      return state;
  }
};
