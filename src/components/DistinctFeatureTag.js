import React from 'react';

import { StyledDistinctFeatureTag } from './styles/StyledDistinctFeatureTag';

const DistinctFeatureTag = ({ title, backgroundColor, color }) => {
	return (
		<StyledDistinctFeatureTag
			className="distinct-feature-tag--container"
			backgroundColor={backgroundColor}
			color={color}
		>
			{title}
		</StyledDistinctFeatureTag>
	);
};

export default DistinctFeatureTag;
