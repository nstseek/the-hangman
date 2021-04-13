import React, { useContext, useEffect } from 'react';
import GameContext from '../../contexts/gameContext';
import './Wordbox.scss';

/**
 * This component renders the spaces to each letter in our secret word, filling them when the user selects the right letter
 */
const Wordbox: React.FC = () => {
  const { word, selectedLetters, errors, setWon } = useContext(GameContext);

  useEffect(() => {
    let missingLetter = false;
    word?.split('').forEach((letter) => {
      missingLetter =
        selectedLetters.findIndex((selecLet) => selecLet === letter) === -1;
    });
    if (!missingLetter) {
      setWon(true);
    }
  }, [selectedLetters]);

  return (
    <div className='Wordbox'>
      {word?.split('').map((letter, index) => (
        <div
          className='wordbox-letter'
          key={Number(`${letter.charCodeAt(0)}${index}`)}>
          {errors === 6 ||
          selectedLetters.findIndex((selecLet) => selecLet === letter) >= 0
            ? letter
            : ''}
        </div>
      ))}
    </div>
  );
};

export default Wordbox;
