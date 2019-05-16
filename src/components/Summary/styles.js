import styled from 'styled-components'
import { Link } from 'react-router-dom'
import baseStyles from '../../styleRoot'
const {atom, borderDefault, bgColor, headerFontSize, breakpoint, bodyFontSize} = baseStyles

export const SummaryContianer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  padding-bottom: ${atom * 2}rem;
  border-bottom: ${borderDefault};
  @media (min-width: ${breakpoint}rem) {
    display: flex;
    flex-flow: row;
    align-items: center;
  }
`

export const SummaryImgContianer = styled.div``

export const SummaryImg = styled.img`
  max-height: ${atom * 50}rem;
  margin: ${atom * 2}rem;
  max-width: 100vw;
`

export const SummaryAboutContianer = styled.div`
  margin-left: ${atom * 2}rem;
`

export const SummaryAboutTitle = styled.h2`
  margin-bottom: ${atom * 2}rem;
  font-size: ${headerFontSize}rem;
`

export const SummaryAboutText = styled.p`
  font-size: ${bodyFontSize}rem;
`

export const SummaryLink = styled(Link)`
  padding-top: ${atom * 2}rem;
  display: block;
  font-size: ${bodyFontSize}rem;
`
