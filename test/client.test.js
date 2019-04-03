/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Guests from '../client/components/Guests.jsx';
import Bedrooms from '../client/components/Bedrooms.jsx';
import Beds from '../client/components/Beds.jsx';
import Baths from '../client/components/Baths.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('Client', () => {
  let num;
  let wrapper;
  describe('Guests', () => {
    it('should render "1 guest" when number of guests is 1', () => {
      num = 1;
      wrapper = shallow(<Guests numGuests={num} />);
      expect(wrapper.find('div').text()).to.equal('1 guest');
    });

    it('should render "3 guests" when number of guests is 3', () => {
      num = 3;
      wrapper = shallow(<Guests numGuests={num} />);
      expect(wrapper.find('div').text()).to.equal('3 guests');
    });

    it('should not render "1 guests" when number of guests is 1', () => {
      num = 1;
      wrapper = shallow(<Guests numGuests={num} />);
      expect(wrapper.find('div').text()).to.not.equal('1 guests');
    });

    it('should not render "3 guest" when number of guests is 3', () => {
      num = 3;
      wrapper = shallow(<Guests numGuests={num} />);
      expect(wrapper.find('div').text()).to.not.equal('3 guest');
    });
  });

  describe('Bedrooms', () => {
    it('should render "1 bedroom" when number of bedrooms is 1', () => {
      num = 1;
      wrapper = shallow(<Bedrooms numBedrooms={num} />);
      expect(wrapper.find('div').text()).to.equal('1 bedroom');
    });

    it('should render "3 bedrooms" when number of bedrooms is 3', () => {
      num = 3;
      wrapper = shallow(<Bedrooms numBedrooms={num} />);
      expect(wrapper.find('div').text()).to.equal('3 bedrooms');
    });

    it('should not render "1 bedrooms" when number of bedrooms is 1', () => {
      num = 1;
      wrapper = shallow(<Bedrooms numBedrooms={num} />);
      expect(wrapper.find('div').text()).to.not.equal('1 bedrooms');
    });

    it('should not render "3 bedroom" when number of bedrooms is 3', () => {
      num = 3;
      wrapper = shallow(<Bedrooms numBedrooms={num} />);
      expect(wrapper.find('div').text()).to.not.equal('3 bedroom');
    });
  });

  describe('Beds', () => {
    it('should render "1 bed" when number of beds is 1', () => {
      num = 1;
      wrapper = shallow(<Beds numBeds={num} />);
      expect(wrapper.find('div').text()).to.equal('1 bed');
    });

    it('should render "3 beds" when number of beds is 3', () => {
      num = 3;
      wrapper = shallow(<Beds numBeds={num} />);
      expect(wrapper.find('div').text()).to.equal('3 beds');
    });

    it('should not render "1 beds" when number of beds is 1', () => {
      num = 1;
      wrapper = shallow(<Beds numBeds={num} />);
      expect(wrapper.find('div').text()).to.not.equal('1 beds');
    });

    it('should not render "3 bed" when number of beds is 3', () => {
      num = 3;
      wrapper = shallow(<Beds numBeds={num} />);
      expect(wrapper.find('div').text()).to.not.equal('3 bed');
    });
  });

  describe('Baths', () => {
    it('should render "1 bath" when number of baths is 1', () => {
      num = 1;
      wrapper = shallow(<Baths numBaths={num} />);
      expect(wrapper.find('div').text()).to.equal('1 bath');
    });

    it('should render "3 baths" when number of baths is 3', () => {
      num = 3;
      wrapper = shallow(<Baths numBaths={num} />);
      expect(wrapper.find('div').text()).to.equal('3 baths');
    });

    it('should not render "1 baths" when number of baths is 1', () => {
      num = 1;
      wrapper = shallow(<Baths numBaths={num} />);
      expect(wrapper.find('div').text()).to.not.equal('1 baths');
    });

    it('should not render "3 bath" when number of baths is 3', () => {
      num = 3;
      wrapper = shallow(<Baths numBaths={num} />);
      expect(wrapper.find('div').text()).to.not.equal('3 bath');
    });
  });
});
