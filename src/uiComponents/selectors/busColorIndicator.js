import React from 'react';
import generateColorHex from '../../generators/colorHexGenerator.js';

export default function createColorIndicator(busRoute) {
  let color = generateColorHex(busRoute);

  return (
    <div
      className="color-indicator"
      style={{backgroundColor: color}}
    >
    </div>
  );
}
