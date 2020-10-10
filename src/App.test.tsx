import React from 'react';
import App from './App';
import { render, fireEvent, screen } from '../test/test-utils';

test('renders learn react link', () => {
  const div = document.createElement('div');
  render(<App />, div);
});
