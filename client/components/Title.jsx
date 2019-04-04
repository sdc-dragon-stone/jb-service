import React from 'react';
import styled from 'styled-components';
import Host from './Host.jsx';

const Wrapper = styled.section`
  display: flex;
  align-items: top;

  > * {
    padding-right: 50px;
  }
  margin-top: 0.67em;
`;

const TitleText = styled.h1`
  display: inline;
  font-size: 32px;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: .3em;
  vertical-align: top;
  width: 525px;
`;

const Title = props => (
  <Wrapper>
    <TitleText>{props.title}</TitleText>
    <Host host={props.host} />
  </Wrapper>
);

export default Title;
