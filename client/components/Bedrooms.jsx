import React from 'react';

const Bedrooms = props => <div>{`${props.numBedrooms} ${props.numBedrooms > 1 ? 'bedrooms' : 'bedroom'}`}</div>;

export default Bedrooms;
