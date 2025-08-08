import styled from 'styled-components';

const Button = styled.button`
  background-color: ${(props) => props.bg || '#3498db'};
  color: ${(props) => props.color || '#fff'};
  border: none;
  padding: ${(props) => props.padding || '10px 16px'};
  font-size: ${(props) => props.size || '16px'};
  border-radius: ${(props) => props.radius || '6px'};
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: bold;
  width: ${(props) => props.fullWidth ? '100%' : 'auto'};

  &:hover {
    background-color: ${(props) => props.hover || '#2980b9'};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export default Button;
