import React from 'react';
import { shallow } from 'enzyme';
import Wordbox from './Wordbox';

describe('<Wordbox />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Wordbox />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
