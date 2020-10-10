import React from 'react';
import App from './App';
import { render, fireEvent, screen } from '../src/test/test-utils';

test('renders learn react link', () => {
  const div = document.createElement('div');
  render(<App />, div);
});
