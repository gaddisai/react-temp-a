import React from 'react';

function Inputs({ name="sai", age=21 }) {
  return (
    <div>
      <p>{name} age is {age}</p>
    </div>
  );
}

export { Inputs };
