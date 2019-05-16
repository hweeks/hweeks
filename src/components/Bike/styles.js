import styled from 'styled-components'
import baseStyles from '../../styleRoot'
const {borderDefault, bodyFontSize, headerFontSize, atom, breakpoint} = baseStyles

export const BikeContainer = styled.div`
  display: flex;
  flex-flow: column;
  border-bottom: ${borderDefault};
  padding: ${atom * 2}rem ${atom}rem;

  &:last-child {
    border: 0;
  }
`

export const BikeImage = styled.img`
  height: auto;
  max-width: 100%;
  padding: ${atom * 3}rem 0;
  @media (min-width: ${breakpoint}rem) {
    order: 3;
  }
`

export const BikeName = styled.p`
  font-size: ${headerFontSize}rem;
  @media (min-width: ${breakpoint}rem) {
    order: 1;
  }
`

export const BikeInfo = styled.p`
  font-size: ${bodyFontSize}rem;
  @media (min-width: ${breakpoint}rem) {
    order: 2;
  }
`
