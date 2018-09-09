import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Summary = ({ firstParagraph, image, slug, title }) => (
  <section className="blogSummary__container">
    <div className="blogSummary__image_container">
      <img
        className="blogSummary__image"
        src={image}
        alt={`Thumb for our ${slug} post`}
      />
    </div>
    <div className="blogSummary__about_container">
      <h2 className="blogSummary__about_title">{title}</h2>
      <span>{firstParagraph}</span>
      <Link to={`/blog/${slug}`} className="blogSummary__link">
          read more
      </Link>
    </div>
  </section>
);

Summary.propTypes = {
  firstParagraph: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Summary;
