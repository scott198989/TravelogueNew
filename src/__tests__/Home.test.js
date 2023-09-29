import React from 'react';
import { render } from '@testing-library/react';
import Home from '../pages/Home';

describe('Home component', () => {
    test('renders without errors', () => {
        render(<Home />);
    });

    it('displays the title correctly', () => {
        const { getByText } = render(<Home />);
        const titleElement = getByText('Travelogue');
        expect(titleElement).toBeInTheDocument();
    });

    it('displays the mission statement correctly', () => {
        const { getByText } = render(<Home />);
        const missionElement = getByText((content) => {
            const hasFirstLine = content.includes('Track your globetrotting adventures and conquer the');
            const hasSecondLine = content.includes('world, one destination at a time.');
            return hasFirstLine && hasSecondLine;
            });
        expect(missionElement).toBeInTheDocument();
    });

    it('renders the image correctly', () => {
        const { getByAltText } = render(<Home />);
        const imageElement = getByAltText('Plane Banner');
        expect(imageElement).toBeInTheDocument();
    });
});
