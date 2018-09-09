import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Summary = ({ firstParagraph, image, slug }) => (
  <section>
    <div>
      <img
        className="blogSummary__image"
        src={image}
        alt={`Thumb for our ${slug} post`}
      />
    </div>
    <div>{firstParagraph}</div>
    <div>
      <Link to={`/blog/${slug}`} className="blogSummar__link">
          read more
      </Link>
    </div>
  </section>
);

Summary.propTypes = {
  firstParagraph: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default Summary;
