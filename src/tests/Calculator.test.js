import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })
  
  it('should add 1 to 4 and get 5', () => {
    const runningTotal = container.getByTestId('running-total');
    const button1 = container.getByTestId('number1');
    const buttonAdd = container.getByTestId('operator-add');
    const button4 = container.getByTestId('number4');
    const buttonEquals = container.getByTestId('operator-equals');
    fireEvent.click(button1);
    fireEvent.click(buttonAdd);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('5');
  })

it('should subtract 4 from 7 and get 3', () => {
  const runningTotal = container.getByTestId('running-total');
  const button7 = container.getByTestId('number7');
  const buttonSubract = container.getByTestId('operator-subtract');
  const button4 = container.getByTestId('number4');
  const buttonEquals = container.getByTestId('operator-equals');
  fireEvent.click(button7);
  fireEvent.click(buttonSubract);
  fireEvent.click(button4);
  fireEvent.click(buttonEquals);
  expect(runningTotal.textContent).toEqual('3');
})

it('should multiply 3 by 5 and get 15', () => {
  const runningTotal = container.getByTestId('running-total');
  const button3 = container.getByTestId('number3');
  const buttonMultiply = container.getByTestId('operator-multiply');
  const button5 = container.getByTestId('number5');
  const buttonEquals = container.getByTestId('operator-equals');
  fireEvent.click(button3);
  fireEvent.click(buttonMultiply);
  fireEvent.click(button5);
  fireEvent.click(buttonEquals);
  expect(runningTotal.textContent).toEqual('15');
})

it('should divide 21 by 7 and get 3', () => {
  const runningTotal = container.getByTestId('running-total');
  const button2 = container.getByTestId('number2');
  const button1 = container.getByTestId('number1');
  const buttonDivide = container.getByTestId('operator-divide');
  const button7 = container.getByTestId('number7');
  const buttonEquals = container.getByTestId('operator-equals');
  fireEvent.click(button2);
  fireEvent.click(button1);
  fireEvent.click(buttonDivide);
  fireEvent.click(button7);
  fireEvent.click(buttonEquals);
  expect(runningTotal.textContent).toEqual('3');
})

it('should be able to concatenate multiple numbers', () => {
  const runningTotal = container.getByTestId('running-total');
  const button2 = container.getByTestId('number2');
  const button5 = container.getByTestId('number5');
  const button3 = container.getByTestId('number3');
  const button1 = container.getByTestId('number1');
  const buttonMultiply = container.getByTestId('operator-multiply');
  const button7 = container.getByTestId('number7');
  const buttonEquals = container.getByTestId('operator-equals');
  fireEvent.click(button5);
  fireEvent.click(button1);
  fireEvent.click(button3);
  fireEvent.click(buttonMultiply);
  fireEvent.click(button7);
  fireEvent.click(button2);
  fireEvent.click(buttonEquals);
  expect(runningTotal.textContent).toEqual('36936');
})

it('should be able to chain multiple operations together', () => {
  const runningTotal = container.getByTestId('running-total');
  const button5 = container.getByTestId('number5');
  const button3 = container.getByTestId('number3');
  const button1 = container.getByTestId('number1');
  const button0 = container.getByTestId('number0');
  const buttonAdd = container.getByTestId('operator-add');
   const buttonSubract = container.getByTestId('operator-subtract');
  const buttonEquals = container.getByTestId('operator-equals');
  fireEvent.click(button3);
  fireEvent.click(buttonAdd);
  fireEvent.click(button1);
  fireEvent.click(button0);
  fireEvent.click(buttonSubract);
  fireEvent.click(button5);
  fireEvent.click(buttonEquals);
  expect(runningTotal.textContent).toEqual('8');
})

it('should be able to clear the number input without effecting the running total', () => {
  const runningTotal = container.getByTestId('running-total');
  const button5 = container.getByTestId('number5');
  const button3 = container.getByTestId('number3');
  const button1 = container.getByTestId('number1');
  const button0 = container.getByTestId('number0');
  const buttonAdd = container.getByTestId('operator-add');
   const buttonClear = container.getByTestId('clear');
  const buttonEquals = container.getByTestId('operator-equals');
  fireEvent.click(button3);
  fireEvent.click(buttonAdd);
  fireEvent.click(button1);
  fireEvent.click(button0);
  fireEvent.click(buttonEquals);
  fireEvent.click(button1);
  fireEvent.click(buttonClear);
  fireEvent.click(buttonAdd);
  fireEvent.click(button5);
  fireEvent.click(buttonEquals);
  expect(runningTotal.textContent).toEqual('18');
})

})

