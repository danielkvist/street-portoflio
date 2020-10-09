import styled from 'styled-components';

import { fallInAnimation } from '../theme/transitions';

const Title = styled.h1`
	animation: ${fallInAnimation}
		${(props) => props.theme.transitions.duration.base}ms
		${(props) => props.theme.transitions.easing.easeInOut} forwards;
	padding: ${(props) => props.theme.spacing(12)};
`;

export default Title;
