import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import '../ImageGallery/ImageGallery.scss';

const ImageGallery = ({ images }) => {
  return (
    <ul className="gallery">
      <ImageGalleryItem images={images} />
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageGallery;
