import React, {Component} from 'react';
import WelcomeMessage from './WelcomeMessage';
import LocationBar from './LocationBar';
import DateBar from './DateBar';
import Photo from './Photo';
import ConfirmationPanel from './ConfirmationPanel';
import axios from 'axios';
import {browserHistory} from 'react-router';

const style = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '100%',
    padding: '2%'
  }
};

export default class Invite extends Component {
  constructor (props) {
    super(props);
    this.state = {user: {name: null}};
  }
  componentDidMount () {
    axios.get(`/api/users/${this.props.params.code}`)
      .then(({data}) => {
        this.setState({user: data});
      })
      .catch(error => {
        console.error(error);
        browserHistory.push('/');
      });
  }
  render () {
    return (
      <div style={style.wrapper}>
        <WelcomeMessage name={this.state.user.name} />
        <LocationBar />
        <DateBar />
        <Photo />
        <ConfirmationPanel />
      </div>
    );
  }
}