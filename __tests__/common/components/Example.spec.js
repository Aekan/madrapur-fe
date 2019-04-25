import React from 'react'
import Enzyme, { shallow } from 'enzyme'

import { Shop } from  '../../../src/js/common/components/Shop'

const fixture = {
  example: {
    result: {
      testing: 'data',
    },
  },
};

describe('ExampleView', () => {
  it('should render a blank div without data', () => {
    const el = shallow(<Shop />)

    expect(el.length).toEqual(1)
    expect(el.find('.exampleOutput').length).toEqual(0)
  })

  it('should render with correct data', () => {
    const el = shallow(
      <Shop {...fixture} />
    )

    expect(el.length).toEqual(1)
    expect(el.find('.exampleOutput').length).toEqual(1)
  })
})
