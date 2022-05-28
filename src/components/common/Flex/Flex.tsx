import React, {FC} from 'react';
import styled from 'styled-components';

const StyledFlex = styled.div<FlexType>`
  display: flex;
  direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'stretch'};
  align-items: ${props => props.align || 'stretch'};
`

type FlexType = {
  direction?: string
  justify?: string
  align?: string
}

const Flex: FC<FlexType> = (props) => {
  return (
    <StyledFlex {...props} />
  );
};

export default Flex;