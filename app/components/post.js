import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

export default class Post extends React.PureComponent {
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
    return (<ReactMarkdown source={markdown} />);
  }
}

Post.propTypes = {
  match: PropTypes.object.isRequired,
};
