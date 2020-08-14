/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { 
  withKnobs,
  text,
  boolean,
  number,
  object
} from '@storybook/addon-knobs';

export default {
  title: 'Storybook Knobs',
  decorators: [withKnobs],
};

export const aButton = () => (
  <button type="button" disabled={boolean('Disabled', false)}>
    {text('Label', 'Add Movie')}
  </button>
);

export const simpleText = () => {
  const name = text('Movie Name', 'Apcalypse Now');
  const runtime = number('Runtime', 135);
  const rating = number('Rating', 5);
  const content = `Movie Name: ${name}; Runtime: ${runtime} mins.; Raing: ${rating}/5.`;

  return <div>{content}</div>;
};

export const testArea = () => {
  const label = 'Styles';
  const defaultValue = {
    backgroundColor: 'gray',
    color: 'yellow',
    borderRadius: '4px',
    height: '80px',
    width: '280px',
    borderColor: 'black',
  };
  const groupId = 'Area-Styles';
  const value = object(label, defaultValue, groupId);
  const areaText = text('Area Text', 'Lorem ipsum dolor sit amet');

  return <textarea style={value}>{`${areaText}`}</textarea>;
};
