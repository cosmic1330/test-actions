import { render, screen } from '@testing-library/react';
import App from './App';

test('1+1=2', () => {
  
  let a = 1;
  let b = 1;
  let c = a+b;
  expect(c).toBe(2);
});
