import React from 'react';

type ReactUseState<T> = React.Dispatch<React.SetStateAction<T>>;

interface GameCtx {
  timeIsOut(): void;
  setErrors: ReactUseState<number>;
  errors: number;
  word: string;
  setWord: ReactUseState<string>;
  selectedLetters: string[];
  setSelectedLetters: ReactUseState<string[]>;
  won: boolean;
  setWon: ReactUseState<boolean>;
}

const GameContext = React.createContext<GameCtx>(null);

export default GameContext;
