import ShowReviewTile from '../../../app/javascript/react/components/ShowReviewTile'
import React from 'react';

describe('ShowReviewTile', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <ShowReviewTile
        userPhoto= "https://placebear.com/200/300"
        userFirstName="Arya"
        userLastName="Stark"
        title="This place is oh so romantic."
        body="I would definitely go on a date here again."
      />
    );
  })

  it("Renders title of review", () => {
    expect(wrapper.props().title).toEqual("This place is oh so romantic.")
    expect(wrapper.props().userFirstName).toEqual("Arya")
    expect(wrapper.props().userLastName).toEqual("Stark")
    expect(wrapper.props().body).toEqual("I would definitely go on a date here again.")
    expect(wrapper.props().userPhoto).toEqual("https://placebear.com/200/300")
  })
});
