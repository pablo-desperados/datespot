import ShowLocationContainer from '../../../app/javascript/react/containers/ShowLocationContainer'
import fetchMock from 'fetch-mock'

describe('ShowLocationContainer', () => {
  let wrapper
  let location
  let routerProps

  beforeEach(() => {
    location = { id: 1, name: 'Trillium', address: 'some screet', city: 'Boston', state: 'MA', zip: '12345', rating: 0}
      wrapper = shallow(
      <ShowLocationContainer/>
    )
  })

  it("Should have the specified initial state", () => {
    expect(wrapper.state()).toEqual({
      chosenLocation: "", reviews: []
    });
  });

  it ('renders title of location', () => {
    wrapper.setState({chosenLocation: location, reviews: [{id:1, title: "hello",body: "hello", user_id: 1, location_id:1}]})
      expect(wrapper.find('ShowTile')).toBePresent()

      expect(wrapper.find('ShowTile').props().name).toEqual("Trillium")
      expect(wrapper.find('ShowTile').props().address).toEqual('some screet')
      expect(wrapper.find('ShowTile').props().city).toEqual('Boston')
      expect(wrapper.find('ShowTile').props().state).toEqual('MA')
      expect(wrapper.find('ShowTile').props().zip).toEqual('12345')
      expect(wrapper.find('ShowTile').props().rating).toEqual(0)
    })
  })
