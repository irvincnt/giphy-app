
import React from 'react';
import { shallow } from "enzyme"
import GifGrid from "../../components/gifGrid"
import useFetchGifs from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs')

describe('Pruebas en el <GifGrid />', () => {
  const category = 'Ironman'
  
  test('Debe mostrarse correctamente el componente', () => {
    useFetchGifs.mockReturnValue({ // método para que no afecte el siguiente test
      data: [],
      loading: true
    })

    const wrapper = shallow( <GifGrid category={category} /> )
    expect(wrapper).toMatchSnapshot();
  })

  test('debe mostrar items cuando useFetchGifs carge ', () => {

    useFetchGifs.mockReturnValue({ // método para que no afecte el siguiente test
      data: [{
        id: '',
        title: '',
        url: ''
      }],
      loading: false
    })

    const wrapper = shallow( <GifGrid category={category} /> )
    expect(wrapper).toMatchSnapshot();
    
  })
})