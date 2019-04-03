import React from 'react';

const Baths = props => <div>{`${props.numBaths} ${props.numBaths > 1 ? 'baths' : 'bath'}`}</div>;

export default Baths;
