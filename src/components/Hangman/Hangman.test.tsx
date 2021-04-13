import React from 'react';
import { mount } from 'enzyme';
import Hangman from './Hangman';
import GameContext from '../../contexts/gameContext';
import hangman1 from '../../assets/hangman_1.png';
import hangman2 from '../../assets/hangman_2.png';
import hangman3 from '../../assets/hangman_3.png';
import hangman4 from '../../assets/hangman_4.png';
import hangman5 from '../../assets/hangman_5.png';
import hangman6 from '../../assets/hangman_6.png';
import hangman7 from '../../assets/hangman_7.png';

describe('<Hangman />', () => {
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

  const mountComponent = () => {
    component = mount(
      <GameContext.Provider value={providerData}>
        <Hangman />
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

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });

  test('It should render an appropriate image for our errors prop in our app state - 0 errors', () => {
    providerData.errors = 0;
    mountComponent();
    const img: HTMLImageElement = component
      .find('img#hangman-state')
      .getDOMNode();
    expect(img.src).toEqual('http://localhost/' + hangman1);
  });

  test('It should render an appropriate image for our errors prop in our app state - 1 errors', () => {
    providerData.errors = 1;
    mountComponent();
    const img: HTMLImageElement = component
      .find('img#hangman-state')
      .getDOMNode();
    expect(img.src).toEqual('http://localhost/' + hangman2);
  });

  test('It should render an appropriate image for our errors prop in our app state - 2 errors', () => {
    providerData.errors = 2;
    mountComponent();
    const img: HTMLImageElement = component
      .find('img#hangman-state')
      .getDOMNode();
    expect(img.src).toEqual('http://localhost/' + hangman3);
  });

  test('It should render an appropriate image for our errors prop in our app state - 3 errors', () => {
    providerData.errors = 3;
    mountComponent();
    const img: HTMLImageElement = component
      .find('img#hangman-state')
      .getDOMNode();
    expect(img.src).toEqual('http://localhost/' + hangman4);
  });

  test('It should render an appropriate image for our errors prop in our app state - 4 errors', () => {
    providerData.errors = 4;
    mountComponent();
    const img: HTMLImageElement = component
      .find('img#hangman-state')
      .getDOMNode();
    expect(img.src).toEqual('http://localhost/' + hangman5);
  });

  test('It should render an appropriate image for our errors prop in our app state - 5 errors', () => {
    providerData.errors = 5;
    mountComponent();
    const img: HTMLImageElement = component
      .find('img#hangman-state')
      .getDOMNode();
    expect(img.src).toEqual('http://localhost/' + hangman6);
  });

  test('It should render an appropriate image for our errors prop in our app state - 6 errors', () => {
    providerData.errors = 6;
    mountComponent();
    const img: HTMLImageElement = component
      .find('img#hangman-state')
      .getDOMNode();
    expect(img.src).toEqual('http://localhost/' + hangman7);
  });
});
