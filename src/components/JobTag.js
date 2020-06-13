import React from 'react';

import { StyledJobTag } from './styles/StyledJobTag';

const JobTag = ({ tag, tagClickHandler }) => {
	return (
		<StyledJobTag className="job-tag--container" onClick={tagClickHandler}>
			{tag}
		</StyledJobTag>
	);
};

export default JobTag;
