import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PackingList from '../pages/PackingList';

describe('<PackingList />', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <PackingList />
            </BrowserRouter>
        );
    });

    it('allows a user to input information into the form', () => {
        const input = screen.getByPlaceholderText(/Add an item/i);
        fireEvent.change(input, { target: { value: 'Test input' } });
        expect(input.value).toBe('Test input');
    });

    it('renders "Add" on the button', () => {
        const addButton = screen.getByText(/Add/i);
        expect(addButton).toBeInTheDocument();
    });

    it('adds an item to the list', () => {
        const input = screen.getByPlaceholderText(/Add an item/i);
        const addButton = screen.getByText(/Add/i);
        
        fireEvent.change(input, { target: { value: 'Test input' } });
        fireEvent.click(addButton);

        const listItem = screen.getByText(/Test input/i);

        expect(listItem).toBeInTheDocument();
        expect(input.value).toBe('');
        fireEvent.click(addButton);

        expect(screen.queryByText(/Test input/i)).toBeInTheDocument();
        expect(screen.getAllByRole('listitem')).toHaveLength(1);
    });

    it('removes an item from the list', () => {
        const input = screen.getByPlaceholderText(/Add an item/i);
        fireEvent.change(input, { target: { value: 'Test input' } });

        const addButton = screen.getByText(/Add/i);
        fireEvent.click(addButton);

        const removeButton = screen.getByText(/Remove/i);
        fireEvent.click(removeButton);

        expect(screen.queryByText(/Test input/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/Remove/i)).not.toBeInTheDocument();
        expect(screen.queryByRole('listitem')).toBeNull();
    });
});