import React, {Component} from 'react';
import {RaisedButton, Popover, Menu, MenuItem} from 'material-ui';

export default class ConfirmationPanel extends Component {
  constructor (props) {
    super(props);

    this.state = {
      open: false
    };
  }

  handleTouchTap (event) {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget
    });
  }

  handleRequestClose (num) {
    this.setState({
      open: false,
      num
    });
  }

  render () {
    return (
      <div>
        <span>{'אשרו את הגעתכם'}</span>
        <div>
          <RaisedButton onTouchTap={event => this.handleTouchTap(event)} label='מגיע' />
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

          <RaisedButton label='אולי מגיע' />
          <RaisedButton label='לא מגיע' />
        </div>
      </div>
    );
  }
}