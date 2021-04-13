import React from 'react';
import { shallow } from 'enzyme';
import History from './History';

describe('<History />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<History />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
