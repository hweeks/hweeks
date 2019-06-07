import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  width: 100%;
  font-size: ${props => props.theme.bodyFontSize}rem;
  line-height: ${props => props.theme.headerFontSize}rem;
  text-align: center;
  border-top: ${props => props.theme.borderDefault};
  border-color: ${props => props.theme.syntax.constant};
`;
export const FooterLink = styled.a`
  font-size: ${props => props.theme.bodyFontSize}rem;
  line-height: ${props => props.theme.headerFontSize}rem;
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
`;
