import React from 'react';

//Functional Component
const QuoteSelection = (props) => {


  //JSX
  return (
    <div style={Styles.selection}>
      <p># Questions </p>
      <select name="numQuote" onChange={props.handleChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </div>
  );
};

const Styles = {
  selection: {
    display: 'flex',
    alignItems: 'center'
  }
};

export default QuoteSelection;