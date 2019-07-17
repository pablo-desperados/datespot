import Show from '../../../app/javascript/react/containers/Show'
import fetchMock from 'fetch-mock'

describe('Show location', () => {
  let wrapper
  let location
  let routerProps

  beforeEach(() => {
    location = {id: 1, name: 'Trillium', address: 'some screet', city: 'Boston', state: 'Ma', zip: '12345'}
    fetchMock.get(`/api/v1/locations/1`, {
      status: 200,
      body: location
    });
    routerProps = { params:  {id: 1} }
    wrapper = mount(
      <Show match={routerProps} />
    )
})

  afterEach(fetchMock.restore)

  describe('date location show page', () => {
    it ('renders title of location', () => {
      setTimeout(()=>{
        expect(wrapper.find('h1').text()).toEqual("Trillium")
        done()

      }, 0)
    })
  })
})
