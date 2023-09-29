import React from 'react' 
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import TravelLogueProtectedIndex from '../pages/TravelLogueProtectedIndex';

describe('TravelLogueProtectedIndex', () => {
    const currentUser = { id: 1 }; 
    const trips = [
        { id: 1, user_id: 1, country: 'Country 1', title: 'Trip 1', photo: 'photo1.jpg' },
        { id: 2, user_id: 1, country: 'Country 2', title: 'Trip 2', photo: 'photo2.jpg' },
    ];

    it('renders the component with user trips', () => {
        render(
            <MemoryRouter>
                <TravelLogueProtectedIndex currentUser={currentUser} trips={trips} />
            </MemoryRouter>
    );
        trips.forEach((trip) => {
            expect(screen.getByText(trip.title)).toBeInTheDocument();
            expect(screen.getByText(trip.country)).toBeInTheDocument();
            expect(screen.getByAltText(`Photo from a trip to ${trip.country}`)).toBeInTheDocument();
        });
    });

    it('renders the component without user trips', () => {
        render(
            <MemoryRouter>
                <TravelLogueProtectedIndex currentUser={currentUser} trips={[]} />
            </MemoryRouter>
        );
        expect(screen.queryByRole('link', { name: 'See travelogue' })).not.toBeInTheDocument();
    });
});