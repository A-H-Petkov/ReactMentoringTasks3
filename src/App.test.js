import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
// import Modal from 'react-modal';

test('renders learn react link', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
}); 
