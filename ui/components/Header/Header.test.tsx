import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Header from './index';

describe('Header', () => {
    it('checks links for header items', () => {
        render(<Header />);

        expect(
            screen.getByRole('link', { name: 'What we do' })
        ).toHaveAttribute('href', '/what-we-do');

        expect(
            screen.getByRole('link', { name: 'The digital divide' })
        ).toHaveAttribute('href', '/digital-divide');

        expect(
            screen.getByRole('link', { name: 'Get involved' })
        ).toHaveAttribute('href', '/get-involved');

        expect(
            screen.getByRole('link', { name: 'Our network' })
        ).toHaveAttribute('href', '/our-network');

        expect(screen.getByRole('link', { name: 'Insights' })).toHaveAttribute(
            'href',
            '/insights'
        );
    });
});
