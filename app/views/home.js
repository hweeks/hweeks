import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <section className="home__container">
      <section className="home__info">
        I'm a developer and avid <Link className="home__link" to="/bikes">cyclist</Link> in the bay area. I'm currently working at Intuit as a Senior Software Engineer.
      </section>
      <section className="home__info">
        If you'd like to talk, <a href="mailto:root@hweeks.com" className="home__link">root@hweeks.com</a> is best.
      </section>
      <section className="home__info">
        If you'd like to ride, <a href="https://www.strava.com/athletes/12027790" className="home__link" target="_blank">strava</a> is best.
      </section>
    </section>
  )
}
