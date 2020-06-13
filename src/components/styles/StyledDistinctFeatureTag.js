import styled from 'styled-components';

export const StyledDistinctFeatureTag = styled.div`
	display: inline-block;
	background-color: ${(props) => props.backgroundColor};
	color: ${(props) => props.color};
	font-size: 0.45rem;
	font-weight: bold;
	padding: 0.3rem 0.4rem;
	padding-top: 0.44rem;
	border-radius: 1rem;
	text-align: center;
	text-transform: uppercase;
`;
