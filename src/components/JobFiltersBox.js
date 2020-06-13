import React from 'react';

import '../styles/JobFiltersBox.css';
import JobFilter from './JobFilter';

const JobFiltersBox = ({
	tagFiltersApplied,
	clearFiltersHandler,
	removeFilterHandler,
}) => {
	return (
		<div className="job-filters-box--container">
			<div className="job-filters-box--tags-container">
				{tagFiltersApplied.map((filter, index) => (
					<div key={index}>
						<JobFilter
							filter={filter}
							removeFilterHandler={() =>
								removeFilterHandler(filter)
							}
						></JobFilter>
					</div>
				))}
			</div>

			<div className="job-filters-box--buttons-container">
				<button
					className="btn btn--transparent btn--clear"
					onClick={clearFiltersHandler}
				>
					Clear
				</button>
			</div>
		</div>
	);
};

export default JobFiltersBox;
