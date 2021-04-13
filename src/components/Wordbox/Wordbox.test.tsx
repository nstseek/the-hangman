import React from 'react';
import { shallow } from 'enzyme';
import Wordbox from './Wordbox';
import GameContext from '../../contexts/gameContext';

describe('<Wordbox />', () => {
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
        <Wordbox />
      </GameContext.Provider>
    );
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
