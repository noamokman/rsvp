import React from 'react';
import Bar from '../shared/Bar';
import generateUrl from 'generate-google-calendar-url';

const dateAction = () => {
  window.open(generateUrl({
    start: new Date(2016, 8, 28, 19, 30),
    end: new Date(2016, 8, 29, 2),
    title: 'החתונה של יוסי ונוי',
    location: 'מתחם דוריה, אזור מלאכי, ישראל',
    details: 'החתונה של יוסי ונוי'
  }));
};

export default () => {
  return (
    <Bar
      text='28/09/2016 בשעה 19:30'
      iconClass='calendar-plus'
      iconText='שמור תאריך ביומן'
      clickAction={dateAction}
    />
  );
};