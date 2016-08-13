import React from 'react';
import Bar from '../shared/Bar';
import mobile from 'is-mobile';

const navigationAction = () => {
  const address = mobile() ? 'waze://?q=מתחם דוריה&navigate=yes' : 'https://www.google.com/maps/dir//%D7%9E%D7%AA%D7%97%D7%9D+%D7%93%D7%95%D7%A8%D7%99%D7%94,+%D7%9B%D7%91%D7%99%D7%A9+35,+Israel%E2%80%AD%E2%80%AD/@31.7860473,34.6244006,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x150290a753074645:0xccee11d333653eef!2m2!1d34.6851308!2d31.6443966';

  window.open(address);
};

export default () => {
  return (
    <Bar text='אולמי דוריה' iconClass='map-marker' iconText='לניווט לחץ כאן' clickAction={navigationAction} />
  );
};