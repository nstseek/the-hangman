import React from 'react';
import { shallow } from 'enzyme';
import History from './History';
import GameContext from '../../contexts/gameContext';

describe('<History />', () => {
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
        <History setHistory={() => null} />
      </GameContext.Provider>
    );
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
