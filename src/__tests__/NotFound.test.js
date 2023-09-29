import React from 'react';
import { render } from '@testing-library/react';
import NotFound from '../pages/NotFound';

describe('NotFound Component', () => {
    it('renders without errors', () => {
        render(<NotFound />);
    });

    it('displays the correct error message', () => {
        const { getByText } = render(<NotFound />);
        const errorMessage = getByText(/This page took a wrong flight path/i);
        expect(errorMessage).toBeInTheDocument();
    });

    it('applies animation class to display message', () => {
        const { container } = render(<NotFound />);
        const displayMessage = container.querySelector('.display-msg__not-found');
        expect(displayMessage).toHaveClass('animate__animated', 'animate__bounce');
    });
});
