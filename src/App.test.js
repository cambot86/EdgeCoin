// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders EdgeCoin title', () => {
    render(<App />);
    const titleElement = screen.getByText(/EdgeCoin/i);
    expect(titleElement).toBeInTheDocument();
});
