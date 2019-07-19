import ShowTile from '../../../app/javascript/react/components/ShowTile'
import React from 'react';

describe('ShowTile', () => {
  let wrapper

      beforeEach(() => {
        wrapper = mount (
          <ShowTile
          name="Trillium"
          address="That big street in Boston"
          city="Boston"
          state="MA"
          zip="02420"
          />
        );
    })

  it("Should have an h1 tag", ()=>{
    expect(wrapper.find('h1').text()).toBe("Trillium");
  });

  it("Should have an p tag", ()=>{
    expect(wrapper.find('p')).toBePresent("That big street in Boston, Boston, MA, 02420");
  });


});
