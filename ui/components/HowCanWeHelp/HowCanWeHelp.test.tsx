import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import HowCanWeHelp from '.';

describe('HowCanWeHelp', () => {
    it('renders content correctly', () => {
        render(<HowCanWeHelp />);

        expect(
            screen.getByText('Start now', { selector: 'button' })
        ).toBeInTheDocument();

        expect(
            screen.getByText('How can we help you?', { selector: 'h2' })
        ).toBeInTheDocument();

        expect(
            screen.getByText(
                "Let us know who you are and what you are looking for, and we'll help get you to the right place.",
                { selector: 'p' }
            )
        ).toBeInTheDocument();

        expect(
            screen.getByText('I am', { selector: 'label' })
        ).toBeInTheDocument();

        expect(
            screen.getByText('and I want', { selector: 'label' })
        ).toBeInTheDocument();
    });
});
