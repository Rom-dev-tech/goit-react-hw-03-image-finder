import PropTypes from 'prop-types';
import '../ImageGalleryItem/ImageGalleryItem.scss';

const ImageGalleryItem = ({ images }) => {
  console.log(images);
  return (
    <>
      {images.map((image) => (
        <li key={image.id} className="gallery__item">
          <img
            src={image.webformatURL}
            alt={image.tags}
            data-source={image.largeImageURL}
            className="gallery__image"
          />
        </li>
      ))}
    </>
  );
};

ImageGalleryItem.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageGalleryItem;
