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

  test('debe de llamar el setCategory y limpiar la caja de texto', () => {
    const value = "hola mundo"
    // 1.- Debe de agregar texto al inputValue
    wrapper.find('input').simulate('change', { target: {value} })

    // 2.- debe de hacer el submit para mandar el nuevo valor
    console.log(wrapper.find('form').text())
    wrapper.find('form').simulate('submit', { preventDefault(){} })

    // 3.- debe de hacer el llamado
    expect(setCategories).toHaveBeenCalled()
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function)) // setCategories debe retornar una función
  

    // 4.- debe validar que el valor del input está en vacio.
    //console.log(wrapper.find('input').prop('value'))
    expect( wrapper.find('input').prop('value') ).toBe('')

  })

})