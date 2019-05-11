import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import faker from 'faker';
import styled from 'styled-components';
import Title from './components/Title.jsx';
import HouseInfo from './components/HouseInfo.jsx';
import createOne from '../database/createOne.js';

const id = (window.id === undefined || window.id === null) ? faker.random.number({ min: 1, max: 100 }) : window.id;

const Wrapper = styled.section`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,600,700');
  font-family: Montserrat, Helvetica Neue, sans-serif;
  color: #484848;
  font-size: 16px;
  font-weight: 400;
  margin: auto;
  width: 600px;
`;

const City = styled.section`
  margin-bottom: 16px;
`;

const Rule = styled.section`
  margin-top: 24px;
  margin-bottom: 24px;
  border-bottom: 1px solid #d2d2d2;
`;

const Links = styled.a`
  color: #008489;
  cursor: pointer;
  display: block;
  font-weight: 600;
  padding: 15px 0;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

const Arrow = styled.section`
  border: solid #008489;
  border-width: 0 1px 1px 0;
  display: inline-block;
  margin: 0 0 3px 5px;
  padding: 3px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`;

class Descriptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: {
        _id: '',
        host: {
          name: '',
          pic: ''
        },
        title: '',
        city: '',
        numGuests: 0,
        homeType: '',
        numBedrooms: 0,
        numBeds: 0,
        numBaths: 0,
        description: ''
      }
    };
    this.randNum = this.randNum.bind(this);
    this.handlePost = this.handlePost.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handlePut = this.handlePut.bind(this);
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: '/description',
      dataType: 'json',
      data: { _id: id },
      success: (data) => {
        this.setState({ home: data });
      }
    });
  }

  handlePost() {
    const postItem = createOne.item();
    console.log('postItem', postItem);
    $.ajax({
      method: 'POST',
      url: '/post',
      dataType: 'json',
      data: { postItem },
      success: () => {
        console.log('posted!');
      }
    });
  }

  handleDelete() {
    const deleteItem = createOne.item();
    console.log('deleteItem', deleteItem);
    $.ajax({
      method: 'DELETE',
      url: '/delete',
      dataType: 'json',
      data: { deleteItem },
      success: () => {
        console.log('deleted!');
      }
    });
  }

  handlePut() {
    $.ajax({
      method: 'PUT',
      url: '/put',
      dataType: 'json',
      data: { _id: id },
      success: () => {
        console.log('put - updated!');
      }
    });
  }

  randNum() {
    return Math.floor(Math.random() * Math.floor(100));
  }

  render() {
    return (
      <Wrapper>
        <Title title={this.state.home.title} host={this.state.home.host} />
        <City>{this.state.home.city}</City>
        <HouseInfo home={this.state.home} />
        <Rule />
        {this.state.home.description}
        <Links href="#">Read more about the space<Arrow /></Links>
        <Links href="#">Contact host</Links>
        <button onClick={this.handlePost}>POST</button><br></br><br></br>
        <button onClick={this.handleDelete}>Delete</button><br></br><br></br>
        <button onClick={this.handlePut}>PUT</button>

      </Wrapper>
    );
  }
}

ReactDOM.render(<Descriptions />, document.getElementById('descriptions'));
