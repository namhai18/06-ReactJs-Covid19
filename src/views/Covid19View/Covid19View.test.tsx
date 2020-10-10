import React from 'react';
import Covid19View from './Covid19View';
import { render, fireEvent, screen } from '../../../test/test-utils';

it('If not log in renders component Covid19View but not have permission', () => {
    render(<Covid19View />, { initialState: { infectedList: [] } })
    expect(screen.getByText('Error 404 : Permission deny')).toBeInTheDocument()
})

// it('Component Covid19View init status', () => {
//     render(<Covid19View />, { initialState: { infectedList: [] } })
//     expect(screen.getByText('Error 404 : Permission deny')).toBeInTheDocument()
// })