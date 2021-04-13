import React, { useEffect, useState } from 'react';
import './App.scss';
import Hangman from './components/Hangman/Hangman';
import Letters from './components/Letters/Letters';
import Time from './components/Time/Time';
import Wordbox from './components/Wordbox/Wordbox';
import GameContext from './contexts/gameContext';
import { getRandomWord } from './words';

function App() {
  const [errors, setErrors] = useState(0);
  const [word, setWord] = useState(getRandomWord());
  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);
  const [history, setHistory] = useState(false);

  const timeIsOut = () => setWord(getRandomWord());

  useEffect(() => {
    setErrors(0);
    setSelectedLetters([]);
    if (!word) {
      setWord(getRandomWord());
    }
  }, [word]);

  return (
    <GameContext.Provider
      value={{
        errors,
        setErrors,
        selectedLetters,
        setSelectedLetters,
        timeIsOut,
        word
      }}>
      <div className='App'>
        <h1>The Hangman Game</h1>
        <Hangman />
        {errors === 6 ? <h3>You lost!</h3> : null}
        <div className='info'>
          <Time />
          <div className='history' onClick={() => setHistory(true)}>
            <i className='fas fa-history' />
            History
          </div>
          <div className='restart' onClick={() => setWord(getRandomWord())}>
            <i className='fas fa-redo' />
            New game
          </div>
        </div>
        <Wordbox />
        <Letters />
      </div>
    </GameContext.Provider>
  );
}

export default App;
