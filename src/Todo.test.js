import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Todo from './Todo'

test('shows todo', async () => {
  const { container, getByText, debug } = render(<Todo title="Secret" body="Message" />);
  debug(container);

  const h1 = getByText('Secret');
  debug(h1);
  expect(h1).toHaveTextContent('Secret');
  expect(h1).toContainHTML("<h1>Secret</h1>");

  expect(container).toHaveTextContent('Secret');
  expect(container).toHaveTextContent('Message');

  expect(container).toContainHTML("<div><h1>Secret</h1><p>Message</p><button>Delete</button></div>");
});