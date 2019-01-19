import React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import { VISIBILITY_FILTERS } from '../constants';
import { setVisibilityFilter } from '../redux/actions/actions';

const VisibilityFilter = (props) => {
    const { activeFilter, setFilter } = props;
    return (
        <div className="visibility-filters">
            {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
                const currentFilter = VISIBILITY_FILTERS[filterKey];
                return (
                    <span
                        key={`visibilty-filter-${currentFilter}`}
                        className={cx(
                            "filter",
                            currentFilter === activeFilter && "filter--active"
                        )}
                        onClick={setFilter}
                    >
                        {currentFilter}
                    </span>
                )
            })
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return { visibilityFilter: state.VisibilityFilter };
};

const mapDispatchToProps = () => {
    return { setVisibilityFilter };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VisibilityFilter);