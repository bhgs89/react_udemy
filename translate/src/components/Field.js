import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
  // Using this.context
  // Same: Field.contextType = LanguageContext;
  static contextType = LanguageContext;

  render() {
    const text = this.context.language === 'english' ? 'Name' : 'Naam';

    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;
