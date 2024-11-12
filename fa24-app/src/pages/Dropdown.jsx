"use client"

import React, { useState } from 'react';

function Dropdown({ btnText, btnOptions, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  console.log(btnText);
  console.log(btnOptions);

  return (
    <div className="dropdown">
      <div className="toggle-btn"><button onClick={() => setIsOpen(!isOpen)}>{btnText}</button></div>
      {isOpen && (
        <div className="options">
        {btnOptions.map((year, index) => (
          <button key={index} onClick={() => onSelect(year)}>{year}</button>
        ))}
      </div>
      )}
    </div>
  );
}

export default Dropdown;