import React from 'react';
import { shallow } from 'enzyme';
import Time from './Time';
import GameContext from '../../contexts/gameContext';

describe('<Time />', () => {
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
        <Time />
      </GameContext.Provider>
    );
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
