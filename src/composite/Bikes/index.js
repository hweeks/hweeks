import React from 'react';
import {BikeContainer} from './styles'
import Bike from '../../components/Bike';

const bikes = [
  {
    name: 'Sarto Dinamica',
    imagename: 'sarto',
    size: 58,
  },
  {
    name: 'BMC Road Machine 03',
    imagename: 'bmc',
    size: 58,
  },
  {
    name: 'Specialized RockHopper',
    imagename: 'hopper',
    size: 58,
  },
  {
    name: 'Surly Disc Trucker',
    imagename: 'disc-trucker',
    size: 58,
  },
];

export default () => (
  <BikeContainer>
    {bikes.map(
      ({ name, imagename, size }, index) => {
        const bikeKey = `bike-${index}`;
        return (
          <Bike
            imagename={imagename}
            name={name}
            size={size}
            key={bikeKey}
          />
        );
      })
    }
  </BikeContainer>
);
