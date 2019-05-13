import React from 'react';
import PropTypes from 'prop-types';
import {
  SummaryContianer,
  SummaryImgContianer,
  SummaryImg,
  SummaryAboutContianer,
  SummaryAboutTitle,
  SummaryAboutText,
  SummaryLink,
} from './styles'

const Summary = ({ firstParagraph, image, slug, title }) => (
  <SummaryContianer>
    <SummaryImgContianer>
      <SummaryImg
        src={image}
        alt={`Thumb for our ${slug} post`}
      />
    </SummaryImgContianer>
    <SummaryAboutContianer>
      <SummaryAboutTitle>{title}</SummaryAboutTitle>
      <SummaryAboutText>{firstParagraph}</SummaryAboutText>
      <SummaryLink to={`/blog/${slug}`}>
          read more
      </SummaryLink>
    </SummaryAboutContianer>
  </SummaryContianer>
);

Summary.propTypes = {
  firstParagraph: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Summary;
