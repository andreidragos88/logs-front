/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import LoadMore from './LoadMore';

describe('LoadMore component', () => {
    test('render button', () => {
        const { getByTestId } = render(<LoadMore onNext={() => { }} />);
        const button = getByTestId('load-btn');

        expect(button).toBeTruthy();
    })
})

