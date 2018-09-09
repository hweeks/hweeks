import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import bash from 'highlight.js/lib/languages/bash';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('bash', bash);

const codeRender = ({ language, value }) => {
  const builtCode = hljs.highlight(language, value);
  return (
    <pre>
      <code dangerouslySetInnerHTML={{ __html: builtCode.value }} />
    </pre>
  );
};

codeRender.propTypes = {
  language: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default class Post extends React.PureComponent {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  componentWillMount() {
    if (!this.state) {
      this.fetchPost();
    }
  }
  fetchPost() {
    const { post } = this.props.match.params;
    fetch(`/post/${post}`).then(res => res.text()).then((markdown) => {
      this.setState({ markdown: markdown.replace('../app/assets', '/img') });
    }).catch((err) => {
      this.setState({ error: err });
    });
  }
  render() {
    const { markdown, error } = this.state || {};
    if (!markdown && !error) {
      return (<div>Loading</div>);
    } else if (error) {
      return (<div>This post could not be fetched.</div>);
    }
    return (<ReactMarkdown className="blog__post" source={markdown} renderers={{ code: codeRender }} />);
  }
}

Post.propTypes = {
  match: PropTypes.object.isRequired,
};
