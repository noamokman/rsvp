import React from 'react';
import {Card, CardText} from 'material-ui';

export default () => {
  return (
    <Card>
      <CardText>
        <span>{'28/09/2016 בשעה 19:30'}</span>
        <div>
          <i className='mdi mdi-calendar-plus' />
          <span>{'שמור תאריך ביומן'}</span>
        </div>
      </CardText>
    </Card>
  );
};