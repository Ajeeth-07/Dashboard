import React from 'react';

function Widget({ name, text, onRemove }) {
  return (
    <div className="widget">
      <h3>{name}</h3>
      <p>{text}</p>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
}

export default Widget;
