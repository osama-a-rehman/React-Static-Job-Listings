import styled from 'styled-components';
// padding: 0.4rem;

export const StyledJobFilter = styled.div`
	display: inline-block;
	color: hsl(180, 29%, 50%);
	font-weight: bold;
	font-size: 0.75rem;
	border-radius: 0.25rem;
	background-color: hsl(180, 52%, 96%);
	margin-right: 1rem;
	margin-bottom: 0.5rem;
	max-height: 2rem;
`;

export const StyledFilterSpan = styled.span`
	padding: 0.5rem;
`;

export const StyledRemoveButton = styled.button`
	padding: 0.5rem;
	background-color: hsl(180, 29%, 50%);
	border: none;
	outline: none;

	border-top-right-radius: 0.25rem;
	border-bottom-right-radius: 0.25rem;

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		vertical-align: middle;
	}

	&:hover {
		background-color: hsl(180, 14%, 20%);
		cursor: pointer;
	}
`;
