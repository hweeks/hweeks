import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeContainer = styled.div`
  display: flex;
  flex-flow: column;
  padding: ${props => props.theme.atom * 2}rem;
`;

export const HomeInfo = styled.div`
  padding: ${props => props.theme.atom}rem 0;
  font-size: ${props => props.theme.bodyFontSize}rem;
`;

export const HomeLink = styled.a`
  font-size: ${props => props.theme.bodyFontSize}rem;
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const HomeWrappedLink = styled(Link)`
  font-size: ${props => props.theme.bodyFontSize}rem;
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
