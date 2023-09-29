import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TravelLogueEdit from '../pages/TravelLogueEdit';

describe("<TravelLogueEdit />", () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <TravelLogueEdit />
            </BrowserRouter>
        );
    });

    it("renders the travellogue edit page", () => {
        const element = screen.getByRole('button', { name: /Confirm Changes!/i });
        expect(element).toBeInTheDocument();
    });
});
