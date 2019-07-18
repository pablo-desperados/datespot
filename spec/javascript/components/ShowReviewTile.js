import ShowReviewTile from '../../../app/javascript/react/components/ShowReviewTile'
import React from 'react';

describe('ShowReviewTile', () => {
  let title,
      body,
      wrapper

      beforeEach(() => {
        wrapper = shallow (
          <ShowReviewTile
          title="This place is oh so romantic."
          body="I would definitely go on a date here again."
          />
        );
      })

      it("Renders title of review", () => {
    expect(wrapper.find('h4').text()).toEqual("This place is oh so romantic.")
  })
});
