import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { HEADER_ICON } from '../Colors';

const StyledNavIcon = styled(Icon)`
  margin-right: 10px;
`;

const NavIcon = props => {
  return <StyledNavIcon {...props} color={HEADER_ICON} size={20} />;
};

const propTypes = {};

const defaultProps = {};

export default NavIcon;

NavIcon.propTypes = propTypes;
NavIcon.defaultProps = defaultProps;
