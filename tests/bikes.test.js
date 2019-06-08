import React from 'react';
import renderer from 'react-test-renderer';
import Bike from '../src/components/Bike';
import { ThemeProvider } from 'styled-components'
import {light} from '../src/themes'

const bikeSettings = {
  name: 'bike name',
  imagename: 'bmc',
  size: 20,
};

test('Bike actually renders', () => {
  const component = renderer.create(
    <ThemeProvider theme={light}>
      <Bike
        imagename={bikeSettings.imagename}
        name={bikeSettings.name}
        size={bikeSettings.size}
      />
    </ThemeProvider>
    ,
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
