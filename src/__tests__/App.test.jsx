import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest';
import App from '../App';


test('App should render with Get started text', () => {
    render(<App />);
    expect(screen.getByText('Get started')).toBeInTheDocument();
})

