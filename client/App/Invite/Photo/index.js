import React from 'react';
import img from './noy_and_yossi.jpeg';

const style = {
  wrapper: {
    padding: '8px'
  },
  image: {
    width: '100%',
    height: '100%'
  }
};

export default () => {
  return (
    <div style={style.wrapper}>
      <img src={img} style={style.image} />
    </div>
  );
};