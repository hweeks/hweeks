import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openMenu: false };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  getToggleState() {
    let menuClass = 'header__links';
    if ((this.state || {}).openMenu) {
      menuClass = `${menuClass} active`;
    }
    return menuClass;
  }
  closeMenu() {
    this.setState({
      openMenu: false,
    });
  }
  toggleMenu() {
    this.setState({
      openMenu: !this.state.openMenu,
    });
  }
  render() {
    const menuToggle = this.getToggleState();
    return (
      <nav className="header__container">
        <Link to="/" className="header__logo" onClick={this.closeMenu}>
          hweeks.com
        </Link>
        <button className="header__toggle" role="menuitem" onClick={this.toggleMenu}>
          menu
        </button>
        <section className={menuToggle}>
          <Link className="header__link" to="/bikes" onClick={this.toggleMenu}>
            bikes
          </Link>
          <a className="header__link" href="/pdf/r.pdf" role="menuitem" onClick={this.toggleMenu}>
            resume
          </a>
          <a className="header__link" href="https://github.com/hweeks">git</a>
          <a
            href="mailto:root@hweeks.com"
            className="header__link"
            role="menuitem"
            onClick={this.toggleMenu}
          >
            email
          </a>
        </section>
      </nav>
    );
  }
}
