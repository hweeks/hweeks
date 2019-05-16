import styled from 'styled-components'
import baseStyles from '../../styleRoot'
const {borderDefault, bodyFontSize, headerFontSize} = baseStyles

export const FooterWrapper = styled.footer`
  width: 100%;
  font-size: ${bodyFontSize}rem;
  line-height: ${headerFontSize}rem;
  text-align: center;
  border-top: ${borderDefault};
`
export const FooterLink = styled.a`
  font-size: ${bodyFontSize}rem;
  line-height: ${headerFontSize}rem;
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
`
