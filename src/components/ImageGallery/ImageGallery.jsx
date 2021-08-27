import PropTypes from 'prop-types';
import Button from '../Button';
import ImageGalleryItem from '../ImageGalleryItem';
import '../ImageGallery/ImageGallery.scss';

const ImageGallery = ({ images, page }) => {
  return (
    <div className="galerry__wraper">
      <ul className="gallery">
        <ImageGalleryItem images={images} />
      </ul>
      {images.length > 0 && <Button page={page} />}
    </div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  page: PropTypes.func,
};

export default ImageGallery;
