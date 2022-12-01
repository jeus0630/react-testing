import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

it('renders learn react link', () => {
    render (<App></App>);
    const linkElement = screen.getByText(/learn more/);
    expect(linkElement).toBeInTheDocument();
})