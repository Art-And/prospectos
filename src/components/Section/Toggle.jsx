import React from 'react';
import '../../assets/styles/App.scss';

const Toggle = () => {
  return (
    <div className='custom-control custom-switch'>
      <input
        type='checkbox'
        className='custom-control-input'
        id='customSwitches'
        disabled
      />
      <label className='custom-control-label' htmlFor='customSwitches'>
      </label>
    </div>
  );
};

export default Toggle;

