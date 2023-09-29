import React from 'react' 
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TravelLogueNew from '../pages/TravelLogueNew';

describe('<TravelLogueNew />', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <TravelLogueNew />
            </BrowserRouter>
        );
    });

    it('allows a user to input information into the form', () => {
        const input = screen.getByLabelText(/title/i);
        fireEvent.change(input, { target: { value: 'Test input' } });
        expect(input.value).toBe('Test input');
    });

    it('displays an error message when information is submitted and post is not valid', () => {
        const submit = screen.getByText(/Add this trip to my Travelogue!/i);
        fireEvent.click(submit);
        expect(screen.getByText(/Please make sure you are logged in and have filled out all required fields: title, entry, country, and region./i))
    })
});