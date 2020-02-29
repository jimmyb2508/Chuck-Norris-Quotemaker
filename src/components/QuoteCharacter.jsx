import React from 'react';

//Functional Component
const QuoteCharacter = (props) => {


  //JSX
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-control">
        <input
          name="firstName"
          value={props.firstName}
          onChange={props.handleChange}
          placeholder="Enter first name.."
          type="text"/>
      </div>

      <div className="form-control">
        <input
          name="lastName"
          value={props.lastName}
          onChange={props.handleChange}
          placeholder="Enter last name.."
          type="text"/>
      </div>

      <button>Change Character</button>
    </form>
  );
};

export default QuoteCharacter;