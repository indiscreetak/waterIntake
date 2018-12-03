import React from 'react';
import { render } from 'react-testing-library';
import Backdrop from './Backdrop';

test('<Backdrop />', () => {
  const { container } = render(<Backdrop />);
  expect(container.firstChild).toMatchSnapshot();
});
