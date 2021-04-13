import React, { useContext } from 'react';
import GameContext from '../../contexts/gameContext';
import hangman1 from '../../assets/hangman_1.png';
import hangman2 from '../../assets/hangman_2.png';
import hangman3 from '../../assets/hangman_3.png';
import hangman4 from '../../assets/hangman_4.png';
import hangman5 from '../../assets/hangman_5.png';
import hangman6 from '../../assets/hangman_6.png';
import hangman7 from '../../assets/hangman_7.png';
import './Hangman.scss';

const Hangman: React.FC = () => {
  const { errors } = useContext(GameContext);

  const getImage = () => {
    switch (errors) {
      case 0:
        return hangman1;
      case 1:
        return hangman2;
      case 2:
        return hangman3;
      case 3:
        return hangman4;
      case 4:
        return hangman5;
      case 5:
        return hangman6;
      case 6:
        return hangman7;
      default:
        throw new Error(
          'Error is greater than parts of body or less than zero!'
        );
    }
  };

  return (
    <div className='Hangman'>
      <img id='hangman-state' src={getImage()} />
    </div>
  );
};

export default Hangman;
