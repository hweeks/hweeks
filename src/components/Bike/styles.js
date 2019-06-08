import styled from 'styled-components';

export const BikeContainer = styled.div`
  display: flex;
  flex-flow: column;
  border-bottom: ${props => props.theme.borderDefault};
  border-color: ${props => props.theme.syntax.constant};
  padding: ${
  props => props.theme.atom * 2
}rem ${
  props => props.theme.atom
}rem;

  &:last-child {
    border: 0;
  }
`;

export const BikeImage = styled.img`
  height: auto;
  max-width: 100%;
  padding: ${props => props.theme.atom * 3}rem 0;
  @media (min-width: ${props => props.theme.breakpoint}rem) {
    order: 3;
  }
`;

export const BikeName = styled.p`
  font-size: ${props => props.theme.headerFontSize}rem;
  color: ${props => props.theme.syntax.tag};
  @media (min-width: ${props => props.theme.breakpoint}rem) {
    order: 1;
  }
`;

export const BikeInfo = styled.p`
  font-size: ${props => props.theme.bodyFontSize}rem;
  color: ${props => props.theme.syntax.entity};
  @media (min-width: ${props => props.theme.breakpoint}rem) {
    order: 2;
  }
`;
