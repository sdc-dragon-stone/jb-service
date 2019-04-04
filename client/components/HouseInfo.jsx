import React from 'react';
import styled from 'styled-components';
import s from 'underscore.string';
import { GiHouse } from 'react-icons/gi';
import Guests from './Guests.jsx';
import Bedrooms from './Bedrooms.jsx';
import Beds from './Beds.jsx';
import Baths from './Baths.jsx';

const Heading = styled.section`
  font-weight: 600;
`;

const Info = styled.section`
  display: flex;
  padding-left: 22px;
  > * {
    padding-right: 26px;
  }
`;

const HouseInfo = props => (
  <div>
    <Heading><GiHouse />  {s(props.home.homeType).capitalize().value()}</Heading>
    <Info>
      <Guests numGuests={props.home.numGuests} />
      <Bedrooms numBedrooms={props.home.numBedrooms} />
      <Beds numBeds={props.home.numBeds} />
      <Baths numBaths={props.home.numBaths} />
    </Info>
  </div>
);

export default HouseInfo;
