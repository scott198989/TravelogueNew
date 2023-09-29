import React from 'react';
import { render, fireEvent, cleanup, getByTestId } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';

describe('Header', () => {
    afterEach(() => 
    cleanup)
    it('renders the navbar with the correct text', () => {
        const { getByText } = render(
        <BrowserRouter> 
            <Header />
        </BrowserRouter>
        );
        const homeLink = getByText(/RSTech/i);
        expect(homeLink).toBeInTheDocument();
    });

    it('renders the header with logo and navigation links when a user is logged in', () => {
        const currentUser = { id: '123' };
        const { getByText, getByAltText } = render(<BrowserRouter><Header currentUser={currentUser} /></BrowserRouter>);
        
        expect(getByAltText('RSTech logo, a mountain with a door and clouds around the peak')).toBeInTheDocument();
        expect(getByText('RSTech')).toBeInTheDocument();
        expect(getByText('Add Trip')).toBeInTheDocument();
        expect(getByText('My Trips')).toBeInTheDocument();
        expect(getByText('My List')).toBeInTheDocument();
        expect(getByText('Adventures')).toBeInTheDocument();
        expect(getByText('Log Out')).toBeInTheDocument();
    });

    it('renders the header with logo and navigation links when no user is logged in', () => {
        const { getByText, getByAltText } = render(<BrowserRouter><Header currentUser={null} /></BrowserRouter>);
        
        expect(getByAltText('RSTech logo, a mountain with a door and clouds around the peak')).toBeInTheDocument();
        expect(getByText('RSTech')).toBeInTheDocument();
        expect(getByText('Adventures')).toBeInTheDocument();
        expect(getByText('Sign Up')).toBeInTheDocument();
        expect(getByText('Log In')).toBeInTheDocument();
    });

    it('calls logout and navigates to / when "Log Out" is clicked', () => {
        const logoutMock = jest.fn();
        const currentUser = { id: '123' };
        const { getByText } = render(
            <BrowserRouter>
                <Header currentUser={currentUser} logout={logoutMock}  />
            </BrowserRouter>);
        
        fireEvent.click(getByText('Log Out'));
        
        expect(logoutMock).toHaveBeenCalledTimes(1);
    });

    it('has a toggler which appears when navbar is too small for items', () => {
        const currentUser = 1
        const { getByTestId } = render(<BrowserRouter>
            <Header currentUser={currentUser} />
        </BrowserRouter>);

        const toggler = getByTestId('navtoggler');
        const collapse = getByTestId('navcollapse');

        fireEvent.click(toggler)

        expect(collapse).not.toHaveAttribute('isOpen')
    })
});

