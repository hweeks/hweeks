import React from 'react';
import PropTypes from 'prop-types';
import {
  BikeContainer,
  BikeImage,
  BikeName,
  BikeInfo
} from './styles'

class Bike extends React.PureComponent {
  buildImageInfo() {
    const imageObject = {};
    imageObject.alt = `A picture of a ${this.props.name} bicycle.`;
    imageObject.src = `assets/img/${this.props.imagename}_small.jpg`;
    imageObject.srcset = `assets/img/${this.props.imagename}_large.jpg 1024w, assets/img/${
      this.props.imagename}_medium.jpg 640w, assets/img/${
      this.props.imagename}_small.jpg 320w`;
    return imageObject;
  }
  render() {
    const imageObject = this.buildImageInfo();
    return (
      <BikeContainer>
        <BikeImage
          src={imageObject.src}
          srcSet={imageObject.srcset}
          alt={imageObject.alt}
        />
        <BikeName>{this.props.name}</BikeName>
        <BikeInfo>
          size: {this.props.size}cm
        </BikeInfo>
      </BikeContainer>
    );
  }
}

Bike.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  imagename: PropTypes.string.isRequired,
};

export default Bike;
