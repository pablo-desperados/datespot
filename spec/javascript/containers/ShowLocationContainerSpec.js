import ShowLocationContainer from '../../../app/javascript/react/containers/ShowLocationContainer'
import fetchMock from 'fetch-mock'

describe('Show location', () => {
  let wrapper
  let location
  let routerProps

  beforeEach(() => {
    location = {
      id: 1,
      name: 'Trillium',
      address: 'some screet',
      city: 'Boston',
      state: 'Ma',
      zip: '12345'
    }

    fetchMock.get(`/api/v1/locations/1`, {
      status: 200,
      body: location
    });

    routerProps = { params:  {id: 1} }
    wrapper = mount(
      <ShowLocationContainer match={routerProps} />
    )
})

  afterEach(fetchMock.restore)


  describe('date location show page', () => {
    it ('renders title of location', (done) => {
      setTimeout(() => {
        expect(wrapper.find('h1').text()).toEqual("Trillium")
        done()
      }, 0)
    })
  })
})
