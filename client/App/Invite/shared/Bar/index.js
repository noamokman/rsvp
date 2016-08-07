import React from 'react';
import {Card, CardText} from 'material-ui';

export default ({text, iconClass, iconText, clickAction}) => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between'
  };
  const iconPanelStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer'
  };
  const textStyle = {
    fontSize: '24pt'
  };

  const textWrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  return (
    <Card>
      <CardText>
        <div style={containerStyle}>
          <div style={textWrapperStyle}>
            <span style={textStyle}>{text}</span>
          </div>
          <div style={iconPanelStyle} onClick={clickAction}>
            <i className={`mdi mdi-36px mdi-${iconClass}`}/>
            <span>{iconText}</span>
          </div>
        </div>
      </CardText>
    </Card>
  );
};