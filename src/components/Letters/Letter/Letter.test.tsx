import React from 'react';
import { shallow } from 'enzyme';
import Letter from './Letter';

describe('<Letter />', () => {
  let component;

  beforeEach(() => {
    component = shallow(
      <Letter letter='A' disabled={false} onClick={() => null} />
    );
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
