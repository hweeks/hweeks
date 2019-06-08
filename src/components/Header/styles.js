import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.nav`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: ${
  props => props.theme.atom * 2
}rem ${
  props => props.theme.atom
}rem;
  border-bottom: ${props => props.theme.borderDefault};
  border-color: ${props => props.theme.syntax.constant};
`;

export const HeaderLinkWrapped = styled(Link)`
  line-height: ${props => props.theme.headerFontSize}rem;
  font-size: ${props => props.theme.headerFontSize}rem;
  padding: ${props => props.theme.atom * 2}rem;
  text-decoration: none;
  color: ${props => props.theme.syntax.keyword};
`;

export const HeaderLogoWrapped = styled(Link)`
  font-size: ${props => props.theme.headerFontSize}rem;
  text-decoration: none;
  color: ${props => props.theme.syntax.string};
  @media (min-width: ${props => props.theme.breakpoint}rem) {
    padding: 0 ${props => props.theme.atom * 2}rem;
  }
`;

export const HeaderLink = styled.a`
  line-height: ${props => props.theme.headerFontSize}rem;
  font-size: ${props => props.theme.headerFontSize}rem;
  padding: ${props => props.theme.atom * 2}rem;
  text-decoration: none;
  color: ${props => props.theme.syntax.keyword};
  @media (min-width: ${props => props.theme.breakpoint}rem) {
    padding: 0 ${props => props.theme.atom * 2}rem;
  }
`;

export const HeaderButton = styled.button`
  font-size: ${props => props.theme.headerFontSize}rem;
  border: 0;
  margin: 0;
  padding: 0;
  background-color: inherit;
  outline: 0;
  @media (min-width: ${props => props.theme.breakpoint}rem) {
    display: none;
  }
`;

export const HeaderMenuWrapper = styled.div`
  display: ${props => (props.isVisible ? 'flex' : 'none')};
  position: absolute;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  border-bottom: ${props => props.theme.borderDefault};
  border-color: ${props => props.theme.syntax.constant};
  width: 100%;
  bottom: -${props => props.theme.atom / 2}rem;
  left: 0;
  transform: translateY(100%);
  @media (min-width: ${props => props.theme.breakpoint}rem) {
    display: flex;
    flex-flow: row;
    position: static;
    border: 0;
    transform: none;
    width: auto;
  }
`;
