import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../src/components/Footer';
import { ThemeProvider } from 'styled-components'
import { light } from '../src/themes'

test('Footer actually renders', () => {
  const component = renderer.create(
    <ThemeProvider theme={light}>
      <Footer />
    </ThemeProvider>,
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
