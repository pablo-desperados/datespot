import React from 'react';

const TextField = (props) => {
  return(
    <div className="textfield">
      <label>{props.label}
        <input
          type="text"
          name={props.name}
          value={props.value}
          onChange={props.handleChange}
        />
      </label>
    </div>
  )
}

export default TextField;
