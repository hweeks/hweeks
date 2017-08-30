import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import Home from './home';
import Bikes from './bikes';

export default () => (
  <section className="site__container">
    <Header />
    <section className="site__content">
      <Route exact path="/" component={Home} />
      <Route path="/bikes" component={Bikes} />
    </section>
    <Footer />
  </section>
);
