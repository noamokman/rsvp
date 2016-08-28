import React, {Component} from 'react';
import {RaisedButton, Popover, Menu, MenuItem} from 'material-ui';
import {greenA400, yellowA400, redA400} from 'material-ui/styles/colors';

const style = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  text: {
    color: '#99835A',
    fontWeight: 'bold',
    fontSize: '1.5em',
    margin: '8px'
  }
};

export default class ConfirmationPanel extends Component {
  constructor (props) {
    super(props);

    this.state = {
      open: false
    };
  }

  handleTouchTap (event) {
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget
    });
  }

  handleRequestClose (num) {
    this.setState({
      open: false
    });

    if (typeof num === 'number') {
      this.props.changeNumAction(num);
    }
  }

  render () {
    return (
      <div style={style.wrapper}>
        <span style={style.text}>{'אשרו את הגעתכם'}</span>
        <div>
          <RaisedButton
            backgroundColor={this.props.currentNum > 0 ? greenA400 : ''}
            onTouchTap={event => this.handleTouchTap(event)}
            label={this.props.currentNum > 1 ? `מגיעים (${this.props.currentNum})` : 'מגיע'}
          />
          <Popover
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            onRequestClose={() => this.handleRequestClose()}
          >
            <Menu>
              <MenuItem onTouchTap={() => this.handleRequestClose(1)} primaryText='אני לבד' />
              <MenuItem onTouchTap={() => this.handleRequestClose(2)} primaryText='אנחנו 2' />
              <MenuItem onTouchTap={() => this.handleRequestClose(3)} primaryText='אנחנו 3' />
              <MenuItem onTouchTap={() => this.handleRequestClose(4)} primaryText='אנחנו 4' />
              <MenuItem onTouchTap={() => this.handleRequestClose(5)} primaryText='אנחנו 5+' />
            </Menu>
          </Popover>

          <RaisedButton
            label='אולי מגיע'
            onTouchTap={() => this.handleRequestClose(-1)}
            backgroundColor={this.props.currentNum < 0 ? yellowA400 : ''}
          />
          <RaisedButton
            label='לא מגיע'
            onTouchTap={() => this.handleRequestClose(0)}
            backgroundColor={this.props.currentNum === 0 ? redA400 : ''}
            labelColor={this.props.currentNum === 0 ? 'white' : ''}
          />
        </div>
      </div>
    );
  }
}