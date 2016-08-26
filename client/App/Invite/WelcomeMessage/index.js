import React from 'react';

const style = {
  welcome: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#99835A',
    fontWeight: 'bold',
    fontSize: '4em',
    marginBottom: '16px'
  },
  comeCelebrate: {
    fontSize: '0.75em'
  }
};

export default ({name}) => {
  return (
    <div>
      <div style={style.welcome}>
        <span>{name ? `שלום ${name},` : 'שלום,'}</span>
        <span style={style.comeCelebrate}>{'בוא לחגוג איתנו!'}</span>
        <span>{'נוי אוקמן & יוסי סבן'}</span>
      </div>
    </div>
  );
};