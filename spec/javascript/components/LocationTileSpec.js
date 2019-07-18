import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import LocationTile from '../../../app/javascript/react/components/LocationTile';

describe('LocationTile', () => {
  let id, name, wrapper;

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <LocationTile
          id="1"
          name="Chipotle"
        />
      </BrowserRouter>
    );
  });

  it("Should render a component with the specific props for the location name", () => {
    expect(wrapper.find(LocationTile)).toHaveProp('name')
  });

  it("Should render a component with the specific props for the location id", () => {
    expect(wrapper.find(LocationTile)).toHaveProp('id')
  });

  it("Should have an h5 tag", () => {
    expect(wrapper.find("h5")).toBePresent();
  });

  it("Should render a link to the show page for that location", () => {
    expect(wrapper.find("Link").props()["to"]).toBe("/locations/1")
  });

});
