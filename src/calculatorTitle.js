// Import React (Mandatory Step).
import React from 'react';

// Create Functional Component.
// Takes title as props.value.
export default function CalculatorTitle(props) {
  return <div className="calculator-title">{props.value}</div>;
}
