import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
  // Using portal [Create Portal]
  // First parameter= Showing content
  // Second parameter= reference to the element we want to render by using querySelector
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      <div onClick={e => e.stopPropagation()} className="ui standard modal visible active">
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector('#modal'),
  );
};

export default Modal;
