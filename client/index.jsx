import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

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
      }
    });
  }

  randNum() {
    return Math.floor(Math.random() * Math.floor(100));
  }

  render() {
    return (
      <div>Hello World</div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
