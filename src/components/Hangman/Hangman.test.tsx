import React from 'react';
import { shallow } from 'enzyme';
import Hangman from './Hangman';

describe('<Hangman />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Hangman />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
