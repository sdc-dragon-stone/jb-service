import React from 'react';

const Beds = props => <div>{`${props.numBeds} ${props.numBeds > 1 ? 'beds' : 'bed'}`}</div>;

export default Beds;
