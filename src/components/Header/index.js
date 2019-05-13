import React from 'react';
import { Link } from 'react-router-dom';
import {
  HeaderContainer,
  HeaderLinkWrapped,
  HeaderLogoWrapped,
  HeaderLink,
  HeaderButton,
  HeaderMenuWrapper,
} from './styles'

export default class Header extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { isVisible: false };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  getToggleState() {
    let menuClass = 'header__links';
    if ((this.state || {}).isVisible) {
      menuClass = `${menuClass} active`;
    }
    return menuClass;
  }
  closeMenu() {
    this.setState({
      isVisible: false,
    });
  }
  toggleMenu() {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  }
  render() {
    const {isVisible} = this.state
    return (
      <HeaderContainer>
        <HeaderLogoWrapped to="/" onClick={this.closeMenu}>
          hweeks.com
        </HeaderLogoWrapped>
        <HeaderButton role="menuitem" onClick={this.toggleMenu}>
          menu
        </HeaderButton>
        <HeaderMenuWrapper isVisible={isVisible}>
          <HeaderLinkWrapped to="/bikes" onClick={this.toggleMenu}>
            bikes
          </HeaderLinkWrapped>
          <HeaderLinkWrapped to="/blog" onClick={this.toggleMenu}>
            blog
          </HeaderLinkWrapped>
          <HeaderLink href="/assets/pdf/r.pdf" role="menuitem" onClick={this.toggleMenu}>
            resume
          </HeaderLink>
          <HeaderLink href="https://github.com/hweeks">git</HeaderLink>
          <HeaderLink
            href="mailto:root@hweeks.com"
            role="menuitem"
            onClick={this.toggleMenu}
          >
            email
          </HeaderLink>
        </HeaderMenuWrapper>
      </HeaderContainer>
    );
  }
}
