import styled from 'styled-components';

import { DISTINCTIVE_FEATURE_FEATURED } from '../../utils/utils';

export const StyledJobListing = styled.div`
	border-left: 0.25rem solid
		${(props) => {
			if (
				props.distinctiveFeatures.includes(DISTINCTIVE_FEATURE_FEATURED)
			) {
				return 'hsl(180, 29%, 50%)';
			} else {
				return 'transparent';
			}
		}};
`;
