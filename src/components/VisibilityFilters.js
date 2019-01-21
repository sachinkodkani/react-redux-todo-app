import React from "react";
import cx from "classnames";
import { connect } from "react-redux";
import { VISIBILITY_FILTERS } from "../constants";
import { setVisibilityFilter } from "../redux/actions/actions";

const VisibilityFilterPane = props => {
  const { visibilityFilter } = props;
  return (
    <div className="visibility-filters">
      {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return (
          <span
            key={`visibilty-filter-${currentFilter}`}
            className={cx(
              "filter",
              currentFilter === visibilityFilter && "filter--active"
            )}
            onClick={() => props.setVisibilityFilter(currentFilter)}
          >
            {currentFilter}
          </span>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return { visibilityFilter: state.visibilityFilter };
};

const mapDispatchToProps = {
  setVisibilityFilter
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibilityFilterPane);
