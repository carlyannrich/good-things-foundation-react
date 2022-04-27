import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import SideBySide from '.';

export const sideBySideContents = {
    heading: 'Testing header',
    content: 'Testing content',
    buttonText: 'Testing button'
};

describe('SideBySide', () => {
    test('renders SideBySide component', () => {
        render(<SideBySide {...sideBySideContents} />);

        expect(screen.getByText('Testing header')).toBeInTheDocument();
        expect(screen.getByText('Testing content')).toBeInTheDocument();
        expect(screen.getByText('Testing header')).toBeInTheDocument();
    });
});
