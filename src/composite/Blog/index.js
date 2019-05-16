import React from 'react';
import {
  BlogContainer
} from './styles'
import Summary from '../../components/Summary';

export default class Blog extends React.PureComponent {
  componentDidMount() {
    if (!this.state) {
      this.fetchSummaries();
    }
  }
  fetchSummaries() {
    fetch('/posts').then(res => res.json()).then((postData) => {
      this.setState({ posts: postData });
    }).catch((err) => {
      this.setState({ error: err });
    });
  }
  render() {
    const { posts, error } = this.state || {};
    if (!posts && !error) {
      return (<div>Loading...</div>);
    } else if (error) {
      return (<div>No posts could be fetched at this time.</div>);
    }
    return (
      <BlogContainer>
        {
          posts.map(post => (<Summary key={`summary-${post.slug}`} {...post} />))
        }
      </BlogContainer>
    );
  }
}
