import React from 'react';
import { useAppContext } from './Context';
import Child from './Child';

const Parent = () => {
  const { parentValue, setParentValue } = useAppContext();

  const handleInputChange = e => {
    setParentValue(e.target.value);
  };

  const handleClearValue = () => {
    setParentValue('');
  };

  return (
    <div className="parent">
      <h2>Parent View</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter value..."
          value={parentValue}
          onChange={handleInputChange}
          className="input-field"
        />
        <div className="button-container">
          <button className="clear-button" onClick={handleClearValue}>
            Clear Value
          </button>
        </div>
      </div>
      <Child />
    </div>
  );
};

export default Parent;
