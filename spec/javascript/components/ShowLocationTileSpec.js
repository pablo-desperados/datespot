import React from 'react';

import ShowLocationTile from '../../../app/javascript/react/components/ShowLocationTile'

describe('ShowLocationTile', () => {
  let name,
      address,
      city,
      state,
      zip,
      wrapper

  beforeEach(() => {
    wrapper = mount(
      <ShowLocationTile
        name="Trillium"
        address="That big street in Boston"
        city="Boston"
        state="MA"
        zip="02420"
      />
    );
  })

  it("Should have an h1 tag", ()=>{
    expect(wrapper.find('h1')).toBePresent();
  });

  it("Should have an p tag", ()=>{
    expect(wrapper.find('p')).toBePresent();
  });

});
