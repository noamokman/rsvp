import React from 'react';
import img from './noy_and_yossi.jpeg';

const style = {
  wrapper: {
    padding: '8px'
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: '2px',
    boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px'
  }
};

export default () => {
  return (
    <div style={style.wrapper}>
      <img src={img} style={style.image} />
    </div>
  );
};