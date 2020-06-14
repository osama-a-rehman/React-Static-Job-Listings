import styled from 'styled-components';

export const StyledJobTag = styled.div`
	display: inline-block;
	color: hsl(180, 29%, 50%);
	font-weight: bold;
	font-size: 0.75rem;
	padding: 0.4rem;
	margin-bottom: 0.5rem;
	border-radius: 0.2rem;
	background-color: hsl(180, 52%, 96%);
	cursor: pointer;

	&:hover {
		background-color: hsl(180, 52%, 92%);
	}
`;
