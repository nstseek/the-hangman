import React from 'react';
import { shallow } from 'enzyme';
import Time from './Time';

describe('<Time />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Time />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
