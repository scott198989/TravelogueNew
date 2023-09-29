import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SignUp from "../pages/SignUp";


describe("SignUp", () => {
    const signupMock = jest.fn()
    beforeEach(() => {
        render(
            <MemoryRouter>
                <SignUp signup={signupMock}/>
            </MemoryRouter>
        )
    })
    it("renders the SignUp component", () => {
        expect(screen.getByTestId("signup-component")).toBeInTheDocument();
    });

    it("renders the form inputs", () => {
        expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Confirm Password")).toBeInTheDocument();
        expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
    });

    it('allows a user to submit information from the form', () => {
        const username = screen.getByLabelText('Email:');
        const password = screen.getByLabelText('Password:')
        const confirm = screen.getByLabelText('Confirm Password:')
        
        fireEvent.change(username, { target: { value: 'test@email.com' } })
        fireEvent.change(password, { target: { value: 'password' } })
        fireEvent.change(confirm, { target: { value: 'password' } })
        fireEvent.click(screen.getByRole('button', { name: 'Submit' }))

        expect(signupMock).toHaveBeenCalled()
    });
})