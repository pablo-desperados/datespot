import { BrowserRouter } from 'react-router-dom';

import LocationTile from '../../../app/javascript/react/components/LocationTile';

describe('LocationTile', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <LocationTile
          id="1"
          name="Chipotle"
          rating="0"
          category="Casual"
        />
      </BrowserRouter>

    );
  });

  it("Should render an h5 tag containing the name received via props", () => {
    expect(wrapper.find("h5").text()).toEqual("Chipotle")
  });

  it("Should render a link to the show page for that location", () => {
    expect(wrapper.find("Link").props()["to"]).toBe("/locations/1")
  });

  it("Should render a p tags containing the rating and category received via props", () => {
    expect(wrapper.find("LocationTile").props().rating).toEqual("0")
    expect(wrapper.find("LocationTile").props().category).toEqual("Casual")
  });
});
