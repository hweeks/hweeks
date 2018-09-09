import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import Post from '../components/post';
import Home from './home';
import Bikes from './bikes';
import Blog from './blog';

export default () => (
  <section className="site__container">
    <Header />
    <section className="site__content">
      <Route exact path="/" component={Home} />
      <Route path="/bikes" component={Bikes} />
      <Route exact path="/blog" component={Blog} />
      <Route path="/blog/:post" component={Post} />
    </section>
    <Footer />
  </section>
);
