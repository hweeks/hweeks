import styled, {createGlobalStyle} from 'styled-components'

export const SiteContainer = styled.div`
  max-width: 120rem;
  width: 100vw;
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  margin: auto;
`

export const SiteContent = styled.div`
  flex-grow: 2;
`

export const SiteGlobals = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Space+Mono');

html {
  box-sizing: border-box;
  font-size: 10px;
  font-family: 'Space Mono', monospace;
}

*, *:before, *:after {
  box-sizing: inherit;
}
`
