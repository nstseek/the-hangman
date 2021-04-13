import React, { useEffect, useState } from 'react';
import './App.scss';
import Hangman from './components/Hangman/Hangman';
import History from './components/History/History';
import Letters from './components/Letters/Letters';
import Time from './components/Time/Time';
import Wordbox from './components/Wordbox/Wordbox';
import GameContext from './contexts/gameContext';
import SavedGames from './types/savedGames';
import { getRandomWord } from './words';

function App() {
  const [errors, setErrors] = useState(0);
  const [word, setWord] = useState(getRandomWord());
  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);
  const [history, setHistory] = useState(false);
  const [won, setWon] = useState(false);

  const timeIsOut = () => setWord(getRandomWord());

  const saveGame = () => {
    const saveGameObject: SavedGames = {
      date: new Date().toString(),
      errors: errors,
      finished: won,
      word: word
    };
    let savedGames: SavedGames[];
    try {
      savedGames = JSON.parse(localStorage.savedGames);
    } catch (err) {
      savedGames = [];
    }
    savedGames.push(saveGameObject);
    localStorage.savedGames = JSON.stringify(savedGames);
  };

  useEffect(() => {
    setErrors(0);
    setSelectedLetters([]);
    setWon(false);
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
        setWord,
        word,
        won,
        setWon
      }}>
      <div className='App'>
        <h1>The Hangman Game</h1>
        {history ? (
          <>
            <div className='controls'>
              <button className='button' onClick={() => setHistory(false)}>
                <i className='fas fa-arrow-left' />
                Back
              </button>
              <button
                className='button'
                onClick={() => {
                  setHistory(false);
                  localStorage.clear();
                }}>
                <i className='fas fa-eraser' />
                Clear history
              </button>
            </div>
            <History setHistory={setHistory} />
          </>
        ) : (
          <>
            <Hangman />
            {errors === 6 ? <h3>You lost!</h3> : null}
            {won ? <h3>You won!</h3> : null}
            <div className='info'>
              <Time />
              <button className='button' onClick={() => setHistory(true)}>
                <i className='fas fa-history' />
                History
              </button>
              <button
                className='button'
                onClick={() => setWord(getRandomWord())}>
                <i className='fas fa-redo' />
                New game
              </button>
              <button className='button' onClick={() => saveGame()}>
                <i className='fas fa-save' />
                Save game
              </button>
            </div>
            <Wordbox />
            <Letters />
          </>
        )}
      </div>
    </GameContext.Provider>
  );
}

export default App;
