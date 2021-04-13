import React from 'react';
import { shallow } from 'enzyme';
import Letters from './Letters';

describe('<Letters />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Letters />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
