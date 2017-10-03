import styled from 'styled-components';

const Title = styled.h1`
    font-size: 1.5em;
    color: ${ props => props.primary ? 'blue' : 'purple' };
`;

export default Title;