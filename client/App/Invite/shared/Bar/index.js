import React from 'react';
import {Card, CardText} from 'material-ui';

const styles = {
  cardWrapper: {
    margin: '8px'
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  iconPanel: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
    width: '60px'
  },
  textStyle: {
    fontSize: '1.5em'
  },
  textWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  iconText: {
    fontSize: '0.75em',
    textAlign: 'center'
  }
};

export default ({text, iconClass, iconText, clickAction}) => {
  return (
    <div style={styles.cardWrapper}>
      <Card>
        <CardText>
          <div style={styles.container}>
            <div style={styles.textWrapper}>
              <span style={styles.textStyle}>{text}</span>
            </div>
            <div style={styles.iconPanel} onClick={clickAction}>
              <i className={`mdi mdi-24px mdi-${iconClass}`} />
              <span style={styles.iconText}>{iconText}</span>
            </div>
          </div>
        </CardText>
      </Card>
    </div>
  );
};