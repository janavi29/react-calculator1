// Import React (Mandatory Step).
import React from 'react';

// Functional Component.
// Used to show Question/Answer.
export default function OutputScreenRow(props) {
  return (
    <div className="screen-row">
      <input type="text" readOnly value={props.value} />
    </div>
  );
}
