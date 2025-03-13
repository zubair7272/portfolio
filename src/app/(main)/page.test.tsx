const { render, screen } = require('@testing-library/react');
const Page = require('./page');

test('renders page with escaped entities', () => {
    render(<Page />);
    expect(screen.getByText(/&apos;/)).toBeInTheDocument();
    expect(screen.getByText(/&lsquo;/)).toBeInTheDocument();
    expect(screen.getByText(/&#39;/)).toBeInTheDocument();
    expect(screen.getByText(/&rsquo;/)).toBeInTheDocument();
});