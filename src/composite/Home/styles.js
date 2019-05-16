import styled from 'styled-components'
import { Link } from 'react-router-dom';
import baseStyles from '../../styleRoot'
const {atom, bodyFontSize} = baseStyles

export const HomeContainer = styled.div`
  display: flex;
  flex-flow: column;
  padding: ${atom * 2}rem;
`

export const HomeInfo = styled.div`
  padding: ${atom}rem 0;
  font-size: ${bodyFontSize}rem;
`

export const HomeLink = styled.a`
  font-size: ${bodyFontSize}rem;
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

export const HomeWrappedLink = styled(Link)`
  font-size: ${bodyFontSize}rem;
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`
