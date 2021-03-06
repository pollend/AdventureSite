import React from 'react';
import '../styles/index.css';

//Each UserResponse
export function UserResponse({ object, index, setChild, next }) {
  return (
    <center>
      <div>
        <button
          className='response'
          onClick={() => {
            if (object.child !== undefined) {
              setChild(object.child);
            } else if (object.link !== undefined) {
              document.location += object.link;
            }
          }}
        >
          {index + '. ' + object.name}
        </button>
      </div>
    </center>
  );
}
