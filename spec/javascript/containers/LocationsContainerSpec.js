import { BrowserRouter } from 'react-router-dom';

import LocationsContainer from '../../../app/javascript/react/containers/LocationsContainer';
import LocationTile from '../../../app/javascript/react/components/LocationTile';

describe("LocationsContainer", () => {
  let wrapper
  let location = {
    id: 1,
    name: "Chipotle",
    address: "Summer St",
    city: "Boston",
    state: "MA",
    zip: "02111"
  }

  beforeEach(() => {
    wrapper = shallow(<LocationsContainer />)
  });

  it("Should have the specified initial state", () => {
    expect(wrapper.state()).toEqual({
      locations: []
    });
  });

  it("Should change the LocationsContainer state to include all available locations", () => {
    expect(wrapper.setState({ locations: [location] }))
  });

});
