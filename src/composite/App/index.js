import React from 'react';
import { Route } from 'react-router-dom';
import { Reset } from 'styled-reset'
import {
  SiteContainer,
  SiteContent,
  SiteGlobals
} from './styles'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Post from '../../components/Post';
import Home from '../Home';
import Bikes from '../Bikes';
import Blog from '../Blog';

const App = () => (
  <SiteContainer>
    <Reset />
    <SiteGlobals />
    <Header />
    <SiteContent>
      <Route exact path="/" component={Home} />
      <Route path="/bikes" component={Bikes} />
      <Route exact path="/blog" component={Blog} />
      <Route path="/blog/:post" component={Post} />
    </SiteContent>
    <Footer />
  </SiteContainer>
);

export default App
