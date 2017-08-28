import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {openMenu: false};
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu () {
    this.setState({
      openMenu: !this.state.openMenu
    });
  }
  closeMenu () {
    this.setState({
      openMenu: false
    });
  }
  getToggleState () {
    let menuClass = 'header__links';
    if ((this.state || {}).openMenu) {
      menuClass = `${menuClass} active`;
    }
    return menuClass;
  }
  render () {
    let menuToggle = this.getToggleState();
    return(
      <nav className="header__container">
        <Link to="/" className="header__logo" onClick={this.closeMenu}>
          hweeks.com
        </Link>
        <section className="header__toggle" onClick={this.toggleMenu}>
          menu
        </section>
        <section className={menuToggle}>
          <Link className="header__link" to="/bikes" onClick={this.toggleMenu}>
            bikes
          </Link>
          <a className="header__link" href="r.pdf" onClick={this.toggleMenu}>
            resume
          </a>
          <a className="header__link" href="https://github.com/hweeks">git</a>
          <a href="mailto:root@hweeks.com" className="header__link"
            onClick={this.toggleMenu}>
            email
          </a>
        </section>
      </nav>
    )
  }
}
