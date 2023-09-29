import React from 'react' 
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TravelLogueIndex from '../pages/TravelLogueIndex';
import mockTrips from '../mockTrips';

describe('<TravelLogueIndex />', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <TravelLogueIndex trips={mockTrips}/>
            </BrowserRouter>
        );
    });

    it('displays to a user saved trips', () => {
        mockTrips.forEach((trip) =>{
            expect(screen.getByText(trip.title)).toBeInTheDocument()
        })
    });
});