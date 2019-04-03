import React from 'react';

const Guests = props => <div>{`${props.numGuests} ${props.numGuests > 1 ? 'guests' : 'guest'}`}</div>;

export default Guests;
