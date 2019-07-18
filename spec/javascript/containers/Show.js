import Show from '../../../app/javascript/react/containers/Show'
import fetchMock from 'fetch-mock'

describe('Show location', () => {
  let wrapper
  let location
  let routerProps

  beforeEach(() => {
    location = {id: 1, name: 'Trillium', address: 'some screet', city: 'Boston', state: 'Ma', zip: '12345'}
    wrapper = shallow (
      <Show/>
    )
})



  describe('date location show page', () => {
    it ('renders title of location', () => {
        expect(wrapper.setState({chosenLocation : location}))
        setTimeout(() => {
        expect(wrapper.find('h1')).toBePresent()
        expect(wrapper.find('h1').text()).toEqual("Trillium")
        done()
      }, 0)
    })
  })
})
