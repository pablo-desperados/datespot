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
        />
      </BrowserRouter>
    );
  });

  it("Should render an h5 tag containing the name received via props", () => {
    expect(wrapper.find("h5").text()).toBe("Chipotle Rating: 0 ")
  });

  it("Should render a link to the show page for that location", () => {
    expect(wrapper.find("Link").props()["to"]).toBe("/locations/1")
  });

});
