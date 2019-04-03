import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Guests from './components/Guests.jsx';
import Bedrooms from './components/Bedrooms.jsx';
import Beds from './components/Beds.jsx';
import Baths from './components/Baths.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: {
        _id: '',
        title: '',
        city: '',
        numGuests: 0,
        numBedrooms: 0,
        numBeds: 0,
        numBaths: 0,
        description: ''
      }
    };
    this.randNum = this.randNum.bind(this);
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: '/description',
      dataType: 'json',
      data: { _id: this.randNum() },
      success: (data) => {
        console.log('data:', data);
        this.setState({ home: data });
      }
    });
  }

  randNum() {
    return Math.floor(Math.random() * Math.floor(100));
  }

  render() {
    return (
      <div>
        <h1>{this.state.home.title}</h1>
        {this.state.home.city}
        <div id="houseInfo">
          <Guests numGuests={this.state.home.numGuests} />
          <Bedrooms numBedrooms={this.state.home.numBedrooms} />
          <Beds numBeds={this.state.home.numBeds} />
          <Baths numBaths={this.state.home.numBaths} />
        </div>
        <hr />
        {this.state.home.description}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
