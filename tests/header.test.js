import React from 'react';
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import Header from '../app/components/header';

const jestComponent = renderer.create(
  <StaticRouter context={{}}>
    <Header />
  </StaticRouter>,
);

test('Header actually renders', () => {
  const tree = jestComponent.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Header toggles menu class', () => {
  const component = mount(
    <StaticRouter context={{}}>
      <Header />
    </StaticRouter>,
  );
  // Verify active class toggling
  component.find('.header__link').at(0).simulate('click');
  expect(
    component.find('.header__links').hasClass('active'),
  ).toEqual(true);
  // Toggle off
  component.find('.header__link').at(0).simulate('click');
  expect(component.find('.header__links').hasClass('active')).toEqual(false);
  // Always turns it off
  component.find('.header__logo').simulate('click');
  expect(component.find('.header__links').hasClass('active')).toEqual(false);
});
