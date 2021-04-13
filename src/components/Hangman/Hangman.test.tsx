import React from 'react';
import { shallow } from 'enzyme';
import Hangman from './Hangman';
import GameContext from '../../contexts/gameContext';

describe('<Hangman />', () => {
  let component;

  beforeEach(() => {
    component = shallow(
      <GameContext.Provider
        value={{
          errors: 0,
          setErrors: () => null,
          selectedLetters: [],
          setSelectedLetters: () => null,
          timeIsOut: () => null,
          setWord: () => null,
          word: '',
          won: false,
          setWon: () => null
        }}>
        <Hangman />
      </GameContext.Provider>
    );
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
