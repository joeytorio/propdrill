import React, { useEffect, useState } from 'react';
import { useAppContext } from './Context';



const Child = () => {
  const { parentValue } = useAppContext();
  const [shouldJiggle, setShouldJiggle] = useState(false);

  useEffect(() => {
    if (parentValue) {
      setShouldJiggle(true);

      const resetJiggle = setTimeout(() => {
        setShouldJiggle(false);
      }, 1000);

      return () => clearTimeout(resetJiggle);
    }
  }, [parentValue]);

  return (
    <div className={`child ${shouldJiggle ? 'jiggle' : ''}`}>
      <h3 className="wavy-text">Child View</h3>
      <p>Received from parent: {parentValue}</p>
    </div>
  );
};

export default Child;
