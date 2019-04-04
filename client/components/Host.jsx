import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  font-size: 14px;
`;

const Pic = styled.img`
  border-radius: 50%;
  height: 48px;
  width: 48px;
`;

const Host = props => (
  <Wrapper>
    <Pic src={props.host.pic} alt={props.host.name} />
    <br />
    {props.host.name}
  </Wrapper>
);

export default Host;
