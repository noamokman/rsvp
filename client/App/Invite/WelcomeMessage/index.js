import React from 'react';

const style = {
  display: 'flex',
  flexDirection: 'column',
  color: '#99835A',
  fontWeight: 'bold',
  fontSize: '22pt'
};

export default ({name}) => {
  return (
    <div style={style}>
      <span>{name ? `שלום ${name},` : 'שלום,'}</span>
      <span>{'בוא לחגוג איתנו!'}</span>
      <span>{'נוי אוקמן ויוסי סבן.'}</span>
    </div>
  );
};