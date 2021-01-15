
import React from 'react';
import { shallow } from "enzyme"
import GifItem from '../../components/gifItem';

describe('Pruebas en <gifGrid>', () => {
  test('Debe mostrar el componente correctamente', () => {
    const wrapper = shallow(<GifItem />)

    expect(wrapper).toMatchSnapshot();
  })
})