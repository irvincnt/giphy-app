import React from 'react';
import { shallow } from "enzyme"
import  AddCategory  from '../../components/addCategory';

describe('Pruebas en <AddCategory />', () => {

  const setCategories = () => {}
  test('debe de mostrar correctamente', () => {
    const wrapper = shallow( <AddCategory setCategories={setCategories}/> )
    expect(wrapper).toMatchSnapshot(); // generate the snapshot of component
  })

})