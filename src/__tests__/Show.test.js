import React from 'react' 
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import TravelLogueShow from '../pages/TravelLogueShow';
import mockTrips from '../mockTrips';

describe('<TravelLogueShow />', () => {
    beforeEach(() => {
        render(
            <MemoryRouter initialEntries={["/TravelLogueShow/1"]}>
                <Routes>
                    <Route path="/TravelLogueShow/:id" element={<TravelLogueShow trips={mockTrips} />} />
                </Routes>
            </MemoryRouter>
        );
    });

    it('displays to a user a saved trip', () => {
        expect(screen.getByText(/Travelogue:/i)).toBeInTheDocument()
    })
});