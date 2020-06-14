import React from 'react';

import {
	StyledJobFilter,
	StyledFilterSpan,
	StyledRemoveButton,
} from './styles/StyledJobFilter';
import removeImg from '../assets/images/icon-remove.svg';

const JobFilter = ({ filter, removeFilterHandler }) => {
	return (
		<StyledJobFilter
			className="job-filter--container"
			onClick={removeFilterHandler}
		>
			<StyledFilterSpan className="job-filter--filter-span">
				{filter}
			</StyledFilterSpan>

			<StyledRemoveButton className="job-filter--remove-button">
				<img src={removeImg} alt="Remove" />
			</StyledRemoveButton>
		</StyledJobFilter>
	);
};

export default JobFilter;
