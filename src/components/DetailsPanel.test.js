import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DetailsPanel from './DetailsPanel';
import { defaultMovieList } from '../mockData/data';

const mockClose = jest.fn();
const mockMovie = defaultMovieList[0]

it('renders correctly', () => {
  const { asFragment } = render(<DetailsPanel movie={mockMovie} closeDetails={mockClose} />);
  expect(asFragment()).toMatchSnapshot();
});

it('renders correctly', () => {
  const { getByText, getByAltText } = render(<DetailsPanel movie={mockMovie} closeDetails={mockClose} />);
  const title = defaultMovieList[0].title.toUpperCase();
  expect(getByText(title)).toBeInTheDocument();
  expect(getByAltText('My_movies')).toBeInTheDocument();
});

it('renders correctly', () => {
  const { getByTitle } = render(<DetailsPanel movie={mockMovie} closeDetails={mockClose} />);
  const closeBtn = getByTitle('close panel');
  expect(closeBtn).toBeInTheDocument();
  fireEvent.click(closeBtn)
  expect(mockClose).toHaveBeenCalled();
});

