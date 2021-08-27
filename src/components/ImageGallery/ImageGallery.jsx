import '../ImageGallery/ImageGallery.scss';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ images }) => {
  return (
    <ul className="image__gallery">
      <ImageGalleryItem images={images} />
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageGallery;
