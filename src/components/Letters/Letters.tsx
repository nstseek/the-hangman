import React, { useContext } from 'react';
import GameContext from '../../contexts/gameContext';
import Letter from './Letter/Letter';
import './Letters.scss';

const getAlphabet = (): string[] => {
  const alph = [];
  for (let i = 65; i <= 90; i++) {
    alph.push(String.fromCharCode(i));
  }
  return alph;
};

const alphabet = getAlphabet();

const Letters: React.FC = () => {
  const {
    selectedLetters,
    setSelectedLetters,
    word,
    setErrors,
    errors
  } = useContext(GameContext);

  const evaluateLetterClick = (letter: string) => {
    if (errors < 6) {
      setSelectedLetters([...selectedLetters, letter]);
      if (word?.indexOf(letter) < 0) {
        setErrors(errors + 1);
      }
    }
  };

  return (
    <div className='Letters'>
      {alphabet.map((letter) => (
        <Letter
          key={letter.charCodeAt(0)}
          disabled={
            selectedLetters.findIndex((selecLet) => selecLet === letter) >= 0
          }
          onClick={() => evaluateLetterClick(letter)}
          letter={letter}
        />
      ))}
    </div>
  );
};

export default Letters;
