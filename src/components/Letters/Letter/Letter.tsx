import React from 'react';
import './Letter.scss';

interface Props {
  letter: string;
  disabled: boolean;
  onClick(letter: string);
}

const Letter: React.FC<Props> = ({ letter, disabled, onClick }) => {
  return (
    <div
      className={`Letter${disabled ? ' disabled' : ''}`}
      onClick={() => (disabled ? null : onClick(letter))}>
      {letter}
    </div>
  );
};

export default Letter;
