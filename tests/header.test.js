import React from 'react';
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router-dom';
import Header from '../src/components/Header';
import { ThemeProvider } from 'styled-components'
import { light } from '../src/themes'

const jestComponent = renderer.create(
  <ThemeProvider theme={light} >
    <StaticRouter context={{}}>
      <Header />
    </StaticRouter>
  </ThemeProvider>,
);

test('Header actually renders', () => {
  const tree = jestComponent.toJSON();
  expect(tree).toMatchSnapshot();
});
