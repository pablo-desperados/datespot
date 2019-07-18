import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import LocationsContainer from '../../../app/javascript/react/containers/LocationsContainer';
import LocationTile from '../../../app/javascript/react/components/LocationTile';

describe("LocationsContainer", () => {
  let wrapper, locations

  beforeEach(() => {
    wrapper = shallow(<LocationsContainer />)
  });

  it("Should have the specified initial state", () => {
    expect(wrapper.state()).toEqual({
      locations: []
    });
  });

  it("Should change the LocationsContainer state to include all locations", () => {
    expect(wrapper.state('locations')).not.toEqual({
      locations: []
    });
  });

});
