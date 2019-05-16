import styled from 'styled-components'
import { Link } from 'react-router-dom'
import baseStyles from '../../styleRoot'
const {atom, borderDefault, bgColor, headerFontSize, breakpoint} = baseStyles

export const HeaderContainer = styled.nav`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: ${atom * 2}rem ${atom}rem;
  border-bottom: ${borderDefault};
`

export const HeaderLinkWrapped = styled(Link)`
  line-height: ${headerFontSize}rem;
  font-size: ${headerFontSize}rem;
  padding: ${atom * 2}rem;
  text-decoration: none;
  color: inherit;
`

export const HeaderLogoWrapped = styled(Link)`
  font-size: ${headerFontSize}rem;
  text-decoration: none;
  color: inherit;
  @media (min-width: ${breakpoint}rem) {
    padding: 0 ${atom * 2}rem;
  }
`

export const HeaderLink = styled.a`
  line-height: ${headerFontSize}rem;
  font-size: ${headerFontSize}rem;
  padding: ${atom * 2}rem;
  text-decoration: none;
  color: inherit;
  @media (min-width: ${breakpoint}rem) {
    padding: 0 ${atom * 2}rem;
  }
`

export const HeaderButton = styled.button`
  font-size: ${headerFontSize}rem;
  border: 0;
  margin: 0;
  padding: 0;
  background-color: inherit;
  outline: 0;
  @media (min-width: ${breakpoint}rem) {
    display: none;
  }
`

export const HeaderMenuWrapper = styled.div`
  display: ${props => props.isVisible ? 'flex' : 'none'};
  position: absolute;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  border-bottom: ${borderDefault};
  width: 100%;
  bottom: -${atom / 2}rem;
  left: 0;
  transform: translateY(100%);
  background: ${bgColor};
  @media (min-width: ${breakpoint}rem) {
    display: flex;
    flex-flow: row;
    position: static;
    border: 0;
    transform: none;
    width: auto;
  }
`
