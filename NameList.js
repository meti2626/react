import React from 'react';

const NameList = () => {
  const names = ["Alice", "Bob", "Charlie", "Diana"];
  
  return (
    <div>
      {names.map((name, index) => (
        <p key={index}>{name}</p>
      ))}
    </div>
  );
};

export default NameList;
