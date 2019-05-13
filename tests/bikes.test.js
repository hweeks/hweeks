import React from 'react';
import renderer from 'react-test-renderer';
import Bike from '../src/components/Bike';

const bikeSettings = {
  name: 'bike name',
  imagename: 'bmc',
  size: 20,
};

test('Bike actually renders', () => {
  const component = renderer.create(
    <Bike
      imagename={bikeSettings.imagename}
      name={bikeSettings.name}
      size={bikeSettings.size}
    />,
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
