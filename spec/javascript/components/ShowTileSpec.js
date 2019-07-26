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
      rating="99"
      category="Fun"
      />
    );
  })

  it("Should have an h1 tag for name", ()=>{
    expect(wrapper.find('h1').text()).toEqual("Trillium");
  });

  it("Should have an p tags for address", ()=>{
    expect(wrapper.find('ShowTile').props().address).toEqual("That big street in Boston");
    expect(wrapper.find('ShowTile').props().city).toEqual("Boston");
    expect(wrapper.find('ShowTile').props().state).toEqual("MA");
    expect(wrapper.find('ShowTile').props().zip).toEqual("02420");
  });

  it("Should have an h3 for rating", ()=>{
    expect(wrapper.find('h3')).toBePresent(0);
  });

  it("Should have an h4 for category", ()=>{
    expect(wrapper.find('h4').text()).toBe("Category: Fun");
  });

  it("Should have invoke handleClick when clicked", ()=>{
    wrapper.simulate('click')
    expect(handleClick).toHaveBeenCalled;
  });

});
