import React from 'react';
import '../assets/styles/design-tokens.css';
import './button.css';

export const Button = ({...props}) => {
  return (
    <button {...props}
      className={ `button ${ props.disabled?'disabled':''} ${props.className??''} ${props.voted?'voted':''}` }
      onClick={ props.onClick }
    >
      { props.children || 'Label' }
    </button>
  );
};
