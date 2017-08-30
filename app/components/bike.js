import React from 'react';
import PropTypes from 'prop-types';

class Bike extends React.Component {
  buildImageInfo() {
    const imageObject = {};
    imageObject.alt = `A picture of a ${this.props.name} bicycle.`;
    imageObject.src = `/img/${this.props.imagename}_small.jpg`;
    imageObject.srcset = `/img/${this.props.imagename}_large.jpg 1024w, /img/${
      this.props.imagename}_medium.jpg 640w, /img/${
      this.props.imagename}_small.jpg 320w`;
    return imageObject;
  }
  render() {
    const imageObject = this.buildImageInfo();
    return (
      <section className="bike__container">
        <img
          className="bike__image"
          src={imageObject.src}
          srcSet={imageObject.srcset}
          alt={imageObject.alt}
        />
        <section className="bike__name">{this.props.name}</section>
        <section className="bike__info">
          size: {this.props.size}cm
        </section>
      </section>
    );
  }
}

Bike.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  imagename: PropTypes.string.isRequired,
};

export default Bike;
