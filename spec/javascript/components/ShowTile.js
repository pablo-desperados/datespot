import ShowTile from '../../../app/javascript/react/components/ShowTile'
import React from 'react';
import jasmineEnzyme from 'jasmine-enzyme'

describe('ShowTile', () => {
  let wrapper;
  let handleClick;


      beforeEach(() => {
        jasmineEnzyme()

        handleClick = jasmine.createSpy('handleClick spy')
        wrapper = mount (
          <ShowTile
          handleClick={handleClick}
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

  it("Should have an h3", ()=>{
    expect(wrapper.find('h3')).toBePresent(0);
  });

  it("Should have invoke handleClick when clicked", ()=>{
    wrapper.simulate('click')
    expect(handleClick).toHaveBeenCalled;
  });

});
