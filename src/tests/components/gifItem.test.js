
import React from 'react';
import { shallow } from "enzyme"
import GifItem from '../../components/gifItem';

describe('Pruebas en <gifGrid>', () => {
  const title = 'Titulo test';
  const url = 'https://localhost/test.jpg'
  const wrapper = shallow(<GifItem title={title} url={url}/>)

  test('Debe mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  })

  test('Debe tener un párrafo con el title', () => {
    const p = wrapper.find('p');
    expect( p.text().trim() ).toBe(title)
  })

  test('Los props de la imagen deben ser lo correctos', () => {
    const img = wrapper.find('img');
    expect( img.prop('src') ).toBe( url )
    expect( img.prop('alt') ).toBe( title );
  })

  test('la card debe tener la calse card-item', () =>  {
    const div = wrapper.find('div')

    expect(div.hasClass('card-item')).toEqual(true)
  })


})