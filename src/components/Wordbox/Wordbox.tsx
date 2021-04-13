import React, { useContext } from 'react';
import GameContext from '../../contexts/gameContext';
import './Wordbox.scss';

const Wordbox: React.FC = () => {
  const { word, selectedLetters, errors } = useContext(GameContext);

  return (
    <div className='Wordbox'>
      {word?.split('').map((letter, index) => (
        <div className='wordbox-letter' key={Number(`${letter.charCodeAt(0)}${index}`)}>
          {errors === 6 || selectedLetters.findIndex((selecLet) => selecLet === letter) >= 0
            ? letter
            : ''}
        </div>
      ))}
    </div>
  );
};

export default Wordbox;
