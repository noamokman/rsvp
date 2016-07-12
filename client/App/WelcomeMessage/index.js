import React from 'react';

export default ({name}) => {
  return (
    <span>{name ? `Hello ${name}!` : 'Hello!'}</span>
  );
};