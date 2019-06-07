import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SummaryContianer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding-bottom: ${props => props.theme.atom * 2}rem;
  border-bottom: ${props => props.theme.borderDefault};
  border-color: ${props => props.theme.syntax.constant};
  @media (min-width: ${props => props.theme.breakpoint}rem) {
    display: flex;
    flex-flow: row;
    align-items: center;
  }
`;

export const SummaryImgContianer = styled.div``;

export const SummaryImg = styled.img`
  max-height: ${props => props.theme.atom * 50}rem;
  margin: ${props => props.theme.atom * 2}rem;
  max-width: 100vw;
`;

export const SummaryAboutContianer = styled.div`
  margin-left: ${props => props.theme.atom * 2}rem;
`;

export const SummaryAboutTitle = styled.h2`
  margin-bottom: ${props => props.theme.atom * 2}rem;
  font-size: ${props => props.theme.headerFontSize}rem;
  color: ${props => props.theme.syntax.tag};
`;

export const SummaryAboutText = styled.p`
  font-size: ${props => props.theme.bodyFontSize}rem;
`;

export const SummaryLink = styled(Link)`
  padding-top: ${props => props.theme.atom * 2}rem;
  display: block;
  font-size: ${props => props.theme.bodyFontSize}rem;
  color: ${props => props.theme.vcs.modified};
`;
