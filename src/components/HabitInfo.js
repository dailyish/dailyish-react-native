import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Actions } from 'react-native-router-flux';

// TODO: move this into it's own component
const StyledView = styled.View`
  background-color: white;
  height: ${props => (props.expanded ? '200px' : '56px')};
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
    name: PropTypes.string.isRequired
  }).isRequired,
  expanded: PropTypes.bool
};

const defaultProps = { expanded: false };

const HabitInfo = props => {
  console.log('rendering habitInfo screen');
  const { habit, expanded } = props;
  const { name } = habit;
  return (
    <TouchableWithoutFeedback onPress={() => !expanded && Actions.habitEdit({ habit })}>
      <StyledView expanded={expanded}>
        <MainText>{name}</MainText>
      </StyledView>
    </TouchableWithoutFeedback>
  );
};

export default HabitInfo;

HabitInfo.propTypes = propTypes;
HabitInfo.defaultProps = defaultProps;
