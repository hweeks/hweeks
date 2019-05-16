import React from 'react';
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router-dom';
import Header from '../src/components/Header';

const jestComponent = renderer.create(
  <StaticRouter context={{}}>
    <Header />
  </StaticRouter>,
);

test('Header actually renders', () => {
  const tree = jestComponent.toJSON();
  expect(tree).toMatchSnapshot();
});
