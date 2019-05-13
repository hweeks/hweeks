import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

export const PostWrapper = styled(ReactMarkdown)`
  display: flex;
  flex-flow: column;

  img {
    max-width: 70vw;
    margin-left: 50%;
    transform: translateX(-50%);
  }

  h1 {
    font-size: 2.4rem;
    margin-bottom: 8px;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 8px;
  }

  p, em, code, li, a {
    font-size: 1.6rem;
    margin-bottom: 4px;
  }

  li {
    margin-left: 2rem;
    list-style: disc;
  }

  code {
    background-color: #CCC;
  }

  pre {
    margin-top: 8px;
    margin-bottom: 8px;
  }

  code span {
    font-size: 1.6rem;
  }
`
