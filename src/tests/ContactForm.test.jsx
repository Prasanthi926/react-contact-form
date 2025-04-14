import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from '../components/ContactForm/ContactForm';

test('renders contact form with fields and submits', () => {
  render(<ContactForm />);

  const nameInput = screen.getByLabelText(/name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const textArea = screen.getByLabelText(/text/i);
  const button = screen.getByRole('button', { name: /submit/i });

  fireEvent.change(nameInput, { target: { value: 'Prasanthi' } });
  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(textArea, { target: { value: 'Hello from Jest!' } });

  expect(nameInput.value).toBe('Prasanthi');
  expect(emailInput.value).toBe('test@example.com');
  expect(textArea.value).toBe('Hello from Jest!');
});