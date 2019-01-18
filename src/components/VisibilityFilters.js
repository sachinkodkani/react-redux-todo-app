import React from 'react';
import cx from 'classnames';
import { VISIBILITY_FILTERS } from '../constants';

const VisibilityFilter = ({ activeFilter }) => {
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
                        onClick={() => {}}
                    >
                        {currentFilter}
                    </span>
                )
            })
            }
        </div>
    );
}

export default VisibilityFilter;