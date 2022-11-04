// Import React (Mandatory Step).
import React from 'react';

// Create our Button component as a functional component.
export default function Button(props) {
  return (
    <input type="button" value={props.label} onClick={props.handleClick} />
  );
}
