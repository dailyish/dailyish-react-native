import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Actions } from 'react-native-router-flux';

const StyledView = styled.View`
  background-color: white;
  height: 56px;
  margin: 16px;
  margin-top: 0px;
  padding: 16px;
  opacity: 0.9;
  shadow-color: #000;
  shadow-offset: 0px 3px;
  shadow-opacity: 0.16;
  shadow-radius: 6px;
  border-bottom-width: 1px;
  border-bottom-color: #000;
`;

const MainText = styled.Text`
  font-size: 16px;
`;

const propTypes = {
  habit: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }).isRequired
};

const defaultProps = {};

const HabitInfo = props => {
  const { habit } = props;
  const { name } = habit;
  return (
    <TouchableWithoutFeedback onPress={() => Actions.habitEdit({ habit })}>
      <StyledView>
        <MainText>{name}</MainText>
      </StyledView>
    </TouchableWithoutFeedback>
  );
};

export default HabitInfo;

HabitInfo.propTypes = propTypes;
HabitInfo.defaultProps = defaultProps;
