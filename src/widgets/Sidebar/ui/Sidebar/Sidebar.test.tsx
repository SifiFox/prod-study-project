import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Suspense } from 'react';
import { Sidebar } from './Sidebar';
// import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";

describe('Sidebar', () => {
    test('test render sidebar', () => {
        componentRender(<Suspense fallback=""><Sidebar /></Suspense>);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test toggle', () => {
        componentRender(<Suspense fallback=""><Sidebar /></Suspense>);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
