import React from 'react'
import Enzyme, { shallow } from 'enzyme'

import { Shop } from  '../../../src/js/common/components/Shop'

const fixture = {
  result: {
    result: [],
  },
  items: [],
  addedItems: [],
  total: 0,
  currency: 'USD',
};

describe('ExampleView', () => {
  it('should render a blank div without data', () => {
    const el = shallow(<Shop />)

    expect(el.length).toEqual(1)
    expect(el.find('.shop-container').length).toEqual(0)
  })

  it('should render with correct data', () => {
    const el = shallow(
      <Shop {...fixture} />
    )

    expect(el.length).toEqual(1)
    expect(el.find('.shop-container').length).toEqual(1)
  })
})
