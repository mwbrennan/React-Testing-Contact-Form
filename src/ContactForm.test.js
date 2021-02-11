import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './components/ContactForm';

test('renders without errors', () => {
    render(<ContactForm />);
})

test('user fills out form, submits', () => {
    //render
    render(<ContactForm />);
    //query for all inputs

    const firstNameInput = screen.getByPlaceholderText(/Edd/i);
    const lastNameInput = screen.getByPlaceholderText(/Burke/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);

    //type into inputs
    userEvent.type(firstNameInput, 'John');
    userEvent.type(lastNameInput, 'Smith');
    userEvent.type(emailInput, 'john@john.com');
    userEvent.type(messageInput, 'hello everybody');

    //query for the button
    const button = screen.getByRole('button', { type: /submit/i })
    //click button
    userEvent.click(button);

    //assert
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();

});

