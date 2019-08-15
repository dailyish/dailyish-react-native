import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { TAB, TAB_FOCUSED } from '../Colors';

const ItemView = styled.TouchableOpacity`
  margin: 20px;
  flex-direction: row;
  align-items: center;
`;

const StyledTabIcon = styled(Icon)`
  margin-right: 10px;
`;

const StyledText = styled.Text`
  color: ${props => props.color}
  font-size: 20px;
`;

const DrawerItem = props => {
  const { onPress, icon, page, focused } = props;
  const tabColor = focused ? TAB_FOCUSED : TAB;
  return (
    <ItemView onPress={onPress} disabled={focused}>
      <StyledTabIcon name={icon} color={tabColor} size={20} />
      <StyledText color={tabColor}>{page}</StyledText>
    </ItemView>
  );
};

const propTypes = {};

const defaultProps = {};

export default DrawerItem;

DrawerItem.propTypes = propTypes;
DrawerItem.defaultProps = defaultProps;
