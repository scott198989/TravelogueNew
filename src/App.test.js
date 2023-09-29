import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

test('renders a navbar', () => {
    render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
    const navbar = screen.getByText(/Travelogue/i);
    expect(navbar).toBeInTheDocument();
});
