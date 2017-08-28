import React from 'react';
import Bike from '../components/bike';

const bikes = [
  {
    name: 'BMC Road Machine 03',
    imagename: 'bmc',
    size: 58
  },
  {
    name: 'Specialized Allez',
    imagename: 'allez',
    size: 61
  },
  {
    name: 'Surly Disc Trucker',
    imagename: 'disc-trucker',
    size: 58
  }
]

export default () => {
  return (
    <section className="bikes__container">
      {bikes.map(
        ({name, imagename, size}, index) => {
          return(
            <Bike imagename={imagename}
              name={name} size={size} key={index}/>
          );
        })
      }
    </section>
  )
}
