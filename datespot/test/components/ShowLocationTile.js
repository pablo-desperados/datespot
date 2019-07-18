import ShowLocationTile from './app/javascript/react/components/ShowLocationTile'
import {mount} from 'enzyme'
import jasmineEnzyme from 'jasmine-enzyme'
import React from 'react'

describe('ShowLocationTile', () => {
  let name,
      address,
      city,
      state,
      zip;

  beforeEach(() => {
    jasmineEnzyme();
    wrapper(
      <ShowLocationTile
        name="Trillium"
        address="That big street in Boston"
        city="Boston"
        state="MA"
        zip="02420"
      />
    );
  });

  it('should render an h1 tag', () => {
    expect(wrapper.find('h1')).toBePresent();
  });

  it('should render a p tag', () => {
    expect(wrapper.find('p')).toBePresent();
  });
})
