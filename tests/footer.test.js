import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../app/components/footer';

test('Footer actually renders', () => {
  const component = renderer.create(
    <Footer />,
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
