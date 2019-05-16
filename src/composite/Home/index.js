import React from 'react';
import { Link } from 'react-router-dom';
import {
  HomeContainer,
  HomeInfo,
  HomeLink,
  HomeWrappedLink
} from './styles'

export default () => (
  <HomeContainer>
    <HomeInfo>
      I&#39;m a developer and avid <HomeWrappedLink to="/bikes">cyclist </HomeWrappedLink>
      in Portland. I&#39;m currently working at Adobe as a Software Engineer III.
    </HomeInfo>
    <HomeInfo>
        If you&#39;d like to talk, <HomeLink href="mailto:root@hweeks.com">root@hweeks.com</HomeLink> is best.
    </HomeInfo>
    <HomeInfo>
      If you&#39;d like to ride, <HomeLink
        href="https://www.strava.com/athletes/12027790"
        target="_blank"
        rel="noopener noreferrer"
      >
      strava</HomeLink> is best.
    </HomeInfo>
  </HomeContainer>
);
