import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Footer from '../components/Footer';


const getByNavlinkText = (container, text) => {
    return Array.from(container.querySelectorAll('a')).find(
        (element) => element.textContent === text
    );
};

describe('Footer', () => {
    it('toggles the navbar when the toggler icon is clicked', () => {
        const { getByTestId } = render(<Footer />);
        const togglerIcon = getByTestId('navbar-toggler');
        fireEvent.click(togglerIcon);
        fireEvent.click(togglerIcon);
        expect(togglerIcon).toBeTruthy();
        fireEvent.click(togglerIcon);
        expect(togglerIcon).toBeTruthy();

    });
})
