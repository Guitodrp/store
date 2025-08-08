import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  gap: ${(props) => props.gap || '16px'};
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: ${(props) => props.justify || 'flex-start'};
  align-items: ${(props) => props.align || 'stretch'};
  flex-wrap: ${(props) => props.wrap || 'wrap'};
  width: 100%;
`;

export default Flex;
