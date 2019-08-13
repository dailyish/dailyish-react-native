import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.TextInput`
  margin-right: 10px;
`;

const Input = props => {
  return <StyledInput {...props} />;
};

const propTypes = {};

const defaultProps = {};

export default Input;

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
