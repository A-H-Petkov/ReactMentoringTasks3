import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MovieForm from './MovieForm';
import { defaultMovieList } from '../../mockData/data';

const mockConfirm = jest.fn();
const mockMovie = defaultMovieList[0]

it('renders correctly', () => {
  const { asFragment } = render(<MovieForm stagedMovie={mockMovie} confirmModal={mockConfirm} />);
  expect(asFragment()).toMatchSnapshot();
});

it('renders correctly', () => {
  const { getByPlaceholderText } = render(<MovieForm stagedMovie={mockMovie} confirmModal={mockConfirm} />);
  expect(getByPlaceholderText('Enter movie title')).toBeInTheDocument();
  expect(getByPlaceholderText('2020')).toBeInTheDocument();
  // ToDo all form elements
});

it('renders correctly', () => {
  const { getByText } = render(<MovieForm stagedMovie={mockMovie} confirmModal={mockConfirm} />);
  const closeBtn = getByText('SUBMIT');
  expect(closeBtn).toBeInTheDocument();
  fireEvent.click(closeBtn)
  expect(mockConfirm).toHaveBeenCalled();
});
