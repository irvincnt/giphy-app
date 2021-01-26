import React from 'react';
import { shallow } from "enzyme"
import  AddCategory  from '../../components/addCategory';

describe('Pruebas en <AddCategory />', () => {

  const setCategories = jest.fn(); // executing a function with different methods
  let wrapper
  
  beforeEach( () => { //circle life for each method test()
    jest.clearAllMocks();
    wrapper = shallow( <AddCategory setCategories={setCategories}/> )
  })

  test('debe de mostrar correctamente', () => {
    expect(wrapper).toMatchSnapshot(); // generate the snapshot of component
  })

  test('debe cambiar la caja de texto',() => {
    const input = wrapper.find('input')
    const value = "Hola mundo"

    input.simulate('change', {target: {value}}); // (event, {event properties} )
    expect(wrapper.find('p').text().trim()).toBe(value)
  })

  test('no debe posterar la función onSubmit', () => {
    wrapper.find('form').simulate('submit', { preventDefault(){} }); // (event, {event properties} )
    expect(setCategories).not.toHaveBeenCalled(); //Que NO se haya llamada
  })

})