import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';

describe('<Login />', () => {
    const loginMock = jest.fn()
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Login login={loginMock}/>
            </BrowserRouter>
        );
    });

    it('renders without crashing', () => {
        const emailLabel = screen.getByText(/email/i);
        expect(emailLabel).toBeInTheDocument();
    });

    it('renders the login form', () => {
        const emailInput = screen.getByLabelText(/email/i);
        const passwordInput = screen.getByLabelText(/password/i);
        const loginButton = screen.getByRole('button', { name: /login/i });

        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
        expect(loginButton).toBeInTheDocument();
    });

    it('allows a user to submit information from the form', () => {
        const username = screen.getByLabelText('Email:');
        const password = screen.getByLabelText('Password:')

        fireEvent.change(username, { target: { value: 'test@email.com' } })
        fireEvent.change(password, { target: { value: 'password' } })
        fireEvent.click(screen.getByRole('button', { value: 'Login' }))

        expect(loginMock).toHaveBeenCalled()
    });
});




