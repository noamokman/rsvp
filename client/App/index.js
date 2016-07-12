import React from 'react';
import WelcomeMessage from './WelcomeMessage';
import LocationBar from './LocationBar';
import DateBar from './DateBar';
import Photo from './Photo';
import ConfirmationBar from './ConfirmationBar';
import queryString from 'query-string';
import axios from 'axios';

const style = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'lightgrey',
    height: '100vh'
  }
};

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {user: {name: null}};

    this.code = queryString.parse(location.search).c;
  }
  componentDidMount () {

    axios.get(`/api/users/?code=${this.code}`)
      .then(({data}) => {
        this.setState({user: data});
      })
      .catch(error => {
        console.log(error);
      });
  }

  render () {
    return (
      <div style={style.wrapper}>
        <WelcomeMessage name={this.state.user.name} />
        <LocationBar />
        <DateBar />
        <Photo />
        <ConfirmationBar />
      </div>
    );
  }
}