// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Web3Silica title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Web3Silica/i);
    expect(titleElement).toBeInTheDocument();
});
