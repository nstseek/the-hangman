import React from 'react';
import { mount } from 'enzyme';
import History from './History';
import GameContext from '../../contexts/gameContext';

describe('<History />', () => {
  let component: ReturnType<typeof mount>;
  let providerData = {
    errors: 0,
    setErrors: () => null,
    selectedLetters: [],
    setSelectedLetters: () => null,
    timeIsOut: () => null,
    setWord: () => null,
    word: '',
    won: false,
    setWon: () => null
  };
  const setHistory = jest.fn();

  const mountComponent = () => {
    component = mount(
      <GameContext.Provider value={providerData}>
        <History setHistory={setHistory} />
      </GameContext.Provider>
    );
  };

  beforeEach(() => {
    providerData = {
      errors: 0,
      setErrors: () => null,
      selectedLetters: [],
      setSelectedLetters: () => null,
      timeIsOut: () => null,
      setWord: () => null,
      word: '',
      won: false,
      setWon: () => null
    };
    mountComponent();
  });

  beforeEach(() => {
    component = mount(
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
