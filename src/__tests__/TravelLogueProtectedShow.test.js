import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import TravelLogueProtectedShow from '../pages/TravelLogueProtectedShow';

describe('<TravelLogueProtectedShow />', () => {
    const currentUser = { id: 1 };
    const trips = [
        { id: 1, user_id: 1, title: 'Trip 1', photo: 'photo1.jpg', city: 'City 1', state: 'State 1', country: 'Country 1', region: 'Region 1', start_date: '2023-01-01', end_date: '2023-01-10', entry: 'Entry 1' },
        { id: 2, user_id: 1, title: 'Trip 2', photo: 'photo2.jpg', city: 'City 2', state: 'State 2', country: 'Country 2', region: 'Region 2', start_date: '2023-02-01', end_date: '2023-02-10', entry: 'Entry 2' },
    ];
    beforeEach(() => {
        render(
            <MemoryRouter initialEntries={["/TravelLogueProtectedShow/1"]}>
                <Routes>
                    <Route path="/TravelLogueProtectedShow/:id" element={<TravelLogueProtectedShow currentUser={currentUser} trips={trips} />} />
                </Routes>
            </MemoryRouter>
        );
    });
    
    it('displays Edit travelogue', () => {
        expect(screen.getByText((content, element) => {
            const hasText = (node) => node.textContent === 'Travelogue:';
            const elementHasText = hasText(element);
            const childrenDontHaveText = Array.from(element.children).every(
                (child) => !hasText(child)
            );

            return elementHasText && childrenDontHaveText;
        })).toBeInTheDocument();
    });
    
  
    it('renders the component with trip details', () => {
        expect(screen.getByText(/Travelogue:/i)).toBeInTheDocument();
        expect(screen.getByText(/Trip 1/i)).toBeInTheDocument();
        expect(screen.getByAltText(/Photo from trip/i)).toBeInTheDocument();
        expect(screen.getByText(/City 1 State 1/i)).toBeInTheDocument();
        expect(screen.getByText(/Country 1, Region 1/i)).toBeInTheDocument();
        expect(screen.getByText(/Arrived: 2023-01-01/i)).toBeInTheDocument();
        expect(screen.getByText(/Departed: 2023-01-10/i)).toBeInTheDocument();
        expect(screen.getByText(/Entry 1/i)).toBeInTheDocument();
    
        expect(screen.getByText(/Edit travelogue/i)).toBeInTheDocument();
        expect(screen.getByText(/Back to all/i)).toBeInTheDocument();
    });
});
