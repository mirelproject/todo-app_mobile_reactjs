import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('adds a new task to the list', () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/add a new task/i);
    const buttonElement = screen.getByText(/add task/i);

    fireEvent.change(inputElement, { target: { value: 'New Test Task' } });
    fireEvent.click(buttonElement);

    const taskElement = screen.getByText(/new test task/i);
    expect(taskElement).toBeInTheDocument();
});
