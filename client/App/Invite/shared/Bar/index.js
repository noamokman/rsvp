import React from 'react';
import {Card, CardText} from 'material-ui';

export default ({text, iconClass, iconText}) => {
  return (
    <Card>
      <CardText>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div>
            <span>{text}</span>
          </div>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <i className={`mdi mdi-${iconClass}`}/>
            <span>{iconText}</span>
          </div>
        </div>
      </CardText>
    </Card>
  );
};